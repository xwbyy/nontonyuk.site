const products = [
    {
        name: 'Netflix',
        description: 
            'Akses streaming Netflix dengan harga terjangkau:\n\n' +
            'Profile Shared 14 Hari: Rp 15.000\n\n' +
            'Profile Private 14 Hari: Rp 20.000\n\n' +
            'Profile Shared 30 Hari: Rp 23.000\n\n' +
            'Profile Private 30 Hari: Rp 35.000\n\n' +
            'Profile Private 30 Hari (2 Devices): Rp 40.000\n\n' +
            'Profile Shared 3 Bulan: Rp 58.500\n\n' +
            'Profile Private 3 Bulan: Rp 90.000\n\n' +
            'Profile Private 3 Bulan (2 Devices): Rp 110.000',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',  // Adjust this link to close the modal
            action: 'closeModal'
        }
    },
    {
        name: 'Canva Pro',
        description: 
            'Dapatkan semua fitur premium Canva dengan harga murah:\n\n' +
            'Canva Pro Anggota (1 Bulan): Rp 8.500\n\n' +
            'Canva Pro Anggota (2 Bulan): Rp 12.000\n\n' +
            'Canva Pro Desainer (1 Bulan): Rp 9.500\n\n' +
            'Canva Education (1 Tahun): Rp 16.500',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',
            action: 'closeModal'
        }
    },
    {
        name: 'YouTube Premium',
        description: 
            'Nikmati YouTube tanpa iklan dan akses ke YouTube Music:\n\n' +
            'Individu Plan 3 Bulan: Rp 24.500',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',
            action: 'closeModal'
        }
    },
    {
        name: 'Vidio Premier',
        description: 
            'Streaming acara TV dan film favorit Anda di Vidio Premier:\n\n' +
            'Vidio Premier Platinum (1 Bulan): Rp 16.000\n\n' +
            'Vidio Premier Platinum (2 Bulan): Rp 18.000\n\n' +
            'Vidio Premier Platinum (3 Bulan): Rp 29.000',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',
            action: 'closeModal'
        }
    },
    {
        name: 'Spotify Premium',
        description: 
            'Dengarkan musik tanpa iklan di Spotify Premium:\n\n' +
            'Spotify Premium 1 Bulan: Rp 61.150\n\n' +
            'Spotify Premium 3 Bulan: Rp 175.000\n\n' +
            'Spotify Premium 6 Bulan: Rp 313.000',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',
            action: 'closeModal'
        }
    },
    {
        name: 'Bstation',
        description: 
            'Streaming video anime dan konten kreator di Bstation:\n\n' +
            'Bstation Premium 3 Bulan: Rp 13.500\n\n' +
            'Bstation Premium 1 Tahun: Rp 17.000',
        button1: {
            text: 'Order Now',
            link: 'https://wa.me/message/2MOJNXNC45Y5E1'
        },
        button2: {
            text: 'More Info',
            link: '#',
            action: 'closeModal'
        }
    }
];

// Function to handle 'More Info' button action
function handleMoreInfoAction(action) {
    if (action === 'closeModal') {
        // Code to close the modal goes here
    }
}

// Sample usage
products.forEach(product => {
    console.log(product.name);
    console.log(product.description);
    console.log('Order Now link:', product.button1.link);
    console.log('More Info action:', product.button2.action);
});
a
