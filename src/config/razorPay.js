import axiosInstance from "../instance/axiosInstance";

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

export const makePayment = async (bookedEvent, user) => {
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
                    alert("Success");
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
            name: "Manu Arora",
            email: "manuarorawork@gmail.com",
            contact: "9999999999",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};