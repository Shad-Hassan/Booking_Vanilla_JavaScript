const seats = ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4","F1","F2","F3","F4","G1","G2","G3","G4","H1","H2","H3","H4","I1","I2","I3","I4","J1","J2","J3","J4"]

// bookedSeat Array
let bookedSeat = [];
let TotalPrice = 0;



// function for button from array

const createButtons = () => {
    const container = document.getElementById('buttonContainer');
    seats.forEach(seat => {
        const button = document.createElement('button');
        button.textContent = seat;
        button.className = "bg-lime-500 text-white py-2 px-4 rounded-xl w-[110px] h-[56px]";
        button.addEventListener('click', () => {
            const isAlreadyBooked = bookedSeat.some(booked =>  booked.seat === seat);
            if(isAlreadyBooked){
                console.log(`${seat} is already booked`)
            }
            else{

                if(bookedSeat.length < 4){
                    bookedSeat.push({seat,type:"Economy",price:550});
                    console.log(`${seat} booked as Economy class`);
                    updateBookingList();
                    
                }
                else {
                    console.log("cannot book more than 4 seats")
                }

            }
            

        })
        container.appendChild(button);
    })
}

// function to update Booking
const updateBookingList = () => {
    const container = document.getElementById('bookedSeatsContainer');
    bookedSeat.slice(-1).forEach(seat => {
        const seatDiv = document.createElement('div');
        seatDiv.textContent = seat.seat;

        const typeDiv = document.createElement('div');
        typeDiv.textContent = seat.type;

        const priceDiv = document.createElement('div');
        priceDiv.textContent = seat.price;


        container.appendChild(seatDiv);
        container.appendChild(typeDiv);
        container.appendChild(priceDiv);

        // Update Total Price
        TotalPrice += seat.price;
        console.log("Total Price is: ",TotalPrice)

        // appending the value
        const appenedPriceHeader = document.getElementById('totalPriceId');
        appenedPriceHeader.textContent = parseFloat(appenedPriceHeader.textContent) + TotalPrice;
    })
}



document.addEventListener('DOMContentLoaded',createButtons);



