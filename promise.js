const isMomHappy = false;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            const reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
const showOff = function (phone) {
    return new Promise(
        (resolve, reject) => {
            const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
const askMom = function () {
    console.log('before asking');
    willIGetNewPhone
        .then(showOff) // chain it here
        .then((fulfilled) => {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch((error) => {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
    console.log('after asking');
};

askMom();