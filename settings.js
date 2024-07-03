const productSettings = {
    "Netflix": {
        title: "Netflix",
        description: "Enjoy unlimited movies and TV shows.",
        price: [
            "Profile Shared 14 Hari - Rp 15.000",
            "Profile Private 14 Hari - Rp 20.000",
            "Profile Shared 30 Hari - Rp 23.000",
            "Profile Private 30 Hari - Rp 35.000",
            "Profile Private 30 Hari (2 Devices) - Rp 40.000",
            "Profile Shared 3 Bulan - Rp 57.500",
            "Profile Private 3 Bulan - Rp 89.000",
            "Profile Private 3 Bulan (2 Devices) - Rp 107.000"
        ].join('\n')
    },
    "Canva Pro": {
        title: "Canva Pro",
        description: "Access premium design tools and content.",
        price: [
            "Canvaa Pro Anggota (1 Bulan) - Rp 8.500",
            "Canvaa Pro Anggota (2 Bulan) - Rp 12.000",
            "Canvaa Pro Desainer (1 Bulan) - Rp 9.500",
            "Canva Education (1 Tahun) - Rp 16.500"
        ].join('\n')
    },
    "YouTube Premium": {
        title: "YouTube Premium",
        description: "Watch ad-free videos and access YouTube Music.",
        price: [
            "IndividuPlan 3 Bulan - Rp 24.500"
        ].join('\n')
    },
    "Vidio Premier": {
        title: "Vidio Premier",
        description: "Stream exclusive shows and movies.",
        price: [
            "Video Premier Platinum (1 Bulan) - Rp 16.000",
            "Video Premier Platinum (1 Bulan) - Rp 18.000",
            "Video Premier Platinum (1 Bulan) - Rp 29.000"
        ].join('\n')
    },
    "Spotify Premium": {
        title: "Spotify Premium",
        description: "Listen to music ad-free and offline.",
        price: [
            "Spotify Premium 1 Bulan - Rp 61.150",
            "Spotify Premium 3 Bulan - Rp 175.000",
            "Spotify Premium 6 Bulan - Rp 313.000"
        ].join('\n')
    },
    "Bstation": {
        title: "Bstation",
        description: "Stream anime and other Japanese shows.",
        price: [
            "BsTation Premium 3 Bulan - Rp 13.500",
            "BsTation Premium 1 Tahun - Rp 17.000"
        ].join('\n')
    }
};

// Function to display product details
function showProductDetails(productName) {
    const product = productSettings[productName];
    if (product) {
        const modalContent = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <pre>${product.price}</pre>
            <button onclick="orderProduct('${productName}')">Order</button>
            <button onclick="closeModal()">Close</button>
        `;
        document.getElementById('modal').innerHTML = modalContent;
        document.getElementById('modal').style.display = 'block';
    } else {
        console.error('Product not found:', productName);
    }
}

// Sample usage to show a product detail
showProductDetails("Netflix");
