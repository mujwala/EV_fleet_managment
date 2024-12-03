function showContent(section) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; 

    if (section === 'ev-intro') {
        contentArea.innerHTML = `
            <h2>Electric Vehicle Introduction</h2>
            <p>Electric vehicles (EVs) represent a revolutionary advancement in transportation technology, using electric motors powered by rechargeable batteries to provide a clean, efficient, and sustainable alternative to traditional internal combustion engine (ICE) vehicles. By eliminating the need for fossil fuels, EVs contribute significantly to reducing greenhouse gas emissions and combating climate change.</p>
            <p>This project focuses on analyzing and generating a synthetic dataset for five prominent EV models:</p>
            <ul>
                <li><strong>Maruti Jimny EV</strong>: Known for its compact size and rugged capabilities, making it a versatile option for both urban and off-road scenarios.</li>
                <li><strong>Nissan ARIYA</strong>: A cutting-edge SUV offering a blend of performance, style, and advanced technology features.</li>
                <li><strong>Honda Clarity EV</strong>: A sedan designed for eco-conscious drivers, emphasizing efficiency and a comfortable driving experience.</li>
                <li><strong>Hyundai Ioniq 5</strong>: A futuristic hatchback with a spacious interior, innovative features, and high-end performance.</li>
                <li><strong>Citroen eC3</strong>: A compact EV focused on affordability and practicality, suitable for urban commuting.</li>
            </ul>
            <p>The dataset captures a wide range of attributes, enabling detailed analysis. Key columns include:</p>
            <ul>
                <li><strong>Make</strong>: Vehicle make or brand.</li>
                <li><strong>Top Speed</strong>: Maximum achievable speed (km/h).</li>
                <li><strong>Battery Capacity</strong>: Energy storage capacity (kWh).</li>
                <li><strong>Acceleration (0-100 km/h)</strong>: Time taken to accelerate from 0 to 100 km/h (seconds).</li>
                <li><strong>Effective Range (ER)</strong>: Estimated range on a full charge (km).</li>
                <li><strong>Power</strong>: Total motor output (kW).</li>
                <li><strong>Torque</strong>: Maximum rotational force (Nm).</li>
                <li><strong>Drivetrain Type</strong>: Type of drivetrain (e.g., FWD, RWD, AWD).</li>
                <li><strong>Monthly Charging Cost</strong>: Cost of charging the vehicle per month (in local currency).</li>
                <li><strong>Maintenance Cost</strong>: Monthly maintenance expense (in local currency).</li>
                <li><strong>Dimensions</strong>: Physical dimensions of the vehicle (length, width, height).</li>
                <li><strong>Assigned Driver</strong>: Driver assigned to the vehicle.</li>
                <li><strong>Manager</strong>: Manager overseeing the vehicle's operations.</li>
                <li><strong>Date of Operation</strong>: Specific date of operation (January 1 to December 31, 2023).</li>
            </ul>
            <p>The dataset enables comprehensive insights into EV performance, costs, and operational trends. By exploring these models and their attributes, this project aims to deepen our understanding of electric vehicle operations, highlight the benefits of transitioning to EVs, and contribute to the development of smarter, more sustainable transportation systems for the future.</p>
        `;
    }
    else if (section === 'dataset') {
        contentArea.innerHTML = `
            <h2>Dataset</h2>
            <p>Below is the dataset used for this analysis:</p>
            <a href="assets/datasets/dataset.csv" download>Download Dataset</a>
        `;
    } else if (section === 'distributions') {
        contentArea.innerHTML = `
            <h2>Distributions</h2>
            <label for="distribution-select">Select Distribution:</label>
            <select id="distribution-select" onchange="displayImage('assets/images', this.value)">
                <option value="">Select...</option>
                <option value="Acceleration.png">Acceleration</option>
                <option value="total number of vehicles per Make.png">total number of vehicles per Make</option>
                <option value="Battery Capacity (BC) by Make.png">Battery Capacity (BC) by Make</option>
                <option value="Monthly Charging Costs by Make.png">Monthly Charging Costs by Make</option>
                <option value="Gross Vehicle Weight.png">Gross Vehicle Weight</option>
                <option value="Total Power by Drive Type.png">Total Power by Drive Type</option>
                <option value="Cargo Volume.png">Cargo Volume</option>
                <option value="Number of Seats.png">Number of Seats</option>
                <option value="Maintenance Cost by Make.png">Maintenance Cost by Make</option>
            </select>
            <div id="image-display" class="mt-4"></div>
        `;
    } else if (section === 'relationships') {
        contentArea.innerHTML = `
            <h2>Relationships</h2>
            <label for="relationship-select">Select Relationship:</label>
            <select id="relationship-select" onchange="displayImage('assets/images', this.value)">
                <option value="">Select...</option>
                <option value="Top Speed by Acceleration.png">Top Speed by Acceleration</option>
                <option value="Gross Vehicle Weight  vs. Max Payload.png">Gross Vehicle Weight vs. Max Payload</option>
                <option value="Total Power vs. Total Torque.png">Total Power vs. Total Torque</option>
                <option value="Wheelbase vs. Cargo Volume.png">Wheelbase vs. Cargo Volume</option>
                <option value="Charging Cost vs. Month.png">Charging Cost vs. Month</option>
            </select>
            <div id="image-display" class="mt-4"></div>
        `;
    } else if (section === 'status') {
        contentArea.innerHTML = `
            <h2>Vehicle Status</h2>
            <label for="status-select">Select Status:</label>
            <select id="status-select" onchange="displayImage('assets/status', this.value)">
                <option value="">Select...</option>
                <option value="Low Range Warning distribution.png">Low Range Warning distribution</option>
                <option value="Active vs. Inactive Vehicles total speed.png">Active vs. Inactive Vehicles total speed</option>
                <option value="Effective Range comparison.png">Effective Range comparison</option>
            </select>
            <div id="image-display" class="mt-4"></div>
        `;
    } else if (section === 'prediction') {
        contentArea.innerHTML = `
            <h2>Predict Vehicle Range</h2>
            <form action="index1.html" method="GET">
           
                <button type="submit">Predict</button>
            </form>
        `;
    }
}

function logout() {
    window.location.href = 'login.html'; // Redirect to login page
}

function displayImage(folder, fileName) {
    const imageDisplay = document.getElementById('image-display');
    if (fileName) {
        imageDisplay.innerHTML = `<img src="${folder}/${fileName}" alt="${fileName}" style="max-width: 100%; height: auto;">`;
    } else {
        imageDisplay.innerHTML = ''; // Clear the display if no image is selected
    }
}
