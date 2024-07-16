// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Placeholder for devices
var devices = [
    { id: 1, name: "Device 1", lat: 51.505, lng: -0.09, details: "Details for Device 1" },
    { id: 2, name: "Device 2", lat: 51.515, lng: -0.1, details: "Details for Device 2" },
];

// Add devices to the map and list
devices.forEach(device => {
    var marker = L.marker([device.lat, device.lng]).addTo(map)
        .bindPopup(device.name)
        .on('click', function() {
            document.getElementById('device-details').innerText = device.details;
        });

    var li = document.createElement('li');
    li.innerText = device.name;
    li.onclick = function() {
        map.setView([device.lat, device.lng], 15);
        marker.openPopup();
        document.getElementById('device-details').innerText = device.details;
    };
    document.getElementById('devices').appendChild(li);
});
