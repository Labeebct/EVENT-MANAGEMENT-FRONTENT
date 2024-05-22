import axiosInstance from "../instance/axiosInstance";
import { openModal } from "../redux/actions/centerConfirm";
import { showGif } from "../redux/reducers/congratGif";
import { hideGif } from "../redux/reducers/congratGif";

const initializeRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };

        document.body.appendChild(script);
    });
};

let type;
let title;
let message;

export const makePayment = async (user, dispatch, socket) => {
    const eventBooked = localStorage.getItem('bookedEvent')
    const bookedEvent = JSON.parse(eventBooked)

    const res = await initializeRazorpay();

    if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
    }

    const response = await axiosInstance.post("/payment", { advanceAmount: bookedEvent.amount });
    const { orderId } = response.data

    var options = {
        key: "rzp_test_WsQWHQupL11gz0",
        name: "Labio",
        currency: bookedEvent.currency,
        amount: bookedEvent.amount,
        order_id: orderId,
        description: "Thankyou for your advance amount",
        image: "https://manuarora.in/logo.png",
        handler: async function (response) {
            try {
                const orderResponse = await axiosInstance.post("/payment-check", {
                    response,
                    orderId,
                    bookedEvent,
                });
                const { data, status } = orderResponse;

                if (status == 200) {
                    socket.emit('BOOKING_COMPLETED', data.bookedEvent)
                    dispatch(showGif())
                    setTimeout(() => {
                        dispatch(hideGif())
                        dispatch(openModal(
                            (type = "booked"),
                            title = 'You Event has been succesfully booked',
                            message = `We are pleased to inform you
                             that your event has been successfully booked.
                              An email containing the details of your assigned
                               agent has been sent to your email address. Additionally,
                                we will share your information with the agent so you can
                                 communicate directly.If you have any further questions or encounter any issues,
                                  please do not hesitate to contact us directly`,
                        ))
                    }, 5000);
                }
            } catch (error) {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status == 500) {
                        Navigate("/500");
                    }
                } else {
                    console.log("No response from the server");
                }
            }
        },
        prefill: {
            name: user.username,
            email: user.email,
            contact: "9999999999",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};