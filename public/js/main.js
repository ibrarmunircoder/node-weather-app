const searchForm = document.querySelector('.find-location');
const searchValue = document.querySelector('input');
const today = document.querySelector('.today');
const forecast = document.querySelector('.forecast-remain');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = searchValue.value;

    fetch(`/weather?city=${city}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            let html = ``;
            today.innerHTML = 
                        `<div class="forecast-header">
								<div class="day">Monday</div>
								<div class="date">6 Oct</div>
                          </div> 
                            <!-- .forecast-header -->
						   <div class="forecast-content">
								<div class="location">${city}</div>
								<div class="degree">
									<div class="num">${data[0].Day_1.Temperature.Minimum.Value}<sup>o</sup>${data[0].Day_1.Temperature.Minimum.Unit}</div>
									<div class="forecast-icon">
										<img src="images/icons/${data[0].Day_1.Day.Icon}.svg" alt="Weather Icon" width=90>
									</div>	
								</div>
                            </div>`;
            for(let i = 1; i <= 4; i++) {
                let day = `Day_${i + 1}`
                html += `
                    <div class="forecast">
                        <div class="forecast-header">
                        <div class="day">Tuesday</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img src="images/icons/${data[i][day].Day.Icon}.svg" alt="" width=48>
                        </div>
                        <div class="degree">${data[i][day].Temperature.Minimum.Value}<sup>o</sup>${data[i][day].Temperature.Minimum.Unit}</div>
                    </div>
                  </div>
                `;
                forecast.innerHTML = html;
            }

        })
        .catch(err => {
            console.log(err);
        })

    console.log(city);
});