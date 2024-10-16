import { series } from './data.js';
import { Serie } from './Serie.js';

document.addEventListener("DOMContentLoaded", function () {
  const seriesTable = document.getElementById("series-list");
  const averageSeasonsElement = document.getElementById("average-seasons");


  const seriesDetail = document.getElementById("series-detail");
  const seriesImage = document.getElementById("series-image");
  const seriesName = document.getElementById("series-name");
  const seriesDescription = document.getElementById("series-description");
  const seriesLink = document.getElementById("series-link");

  function displaySeries(series: Serie[]): void {
    series.forEach((serie) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${serie.id}</td>
        <td><img src="${serie.imageUrl}" alt="${serie.name}" width="100" /></td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        <td><a href="${serie.link}" target="_blank">Más información</a></td>
        <td>${serie.description}</td>
      `;

     
      row.addEventListener("click", () => {
    
        seriesDetail!.style.display = "block"; 
        seriesImage!.setAttribute('src', serie.imageUrl);
        seriesName!.textContent = serie.name;
        seriesDescription!.textContent = serie.description;
        seriesLink!.setAttribute('href', serie.link);
      });

      seriesTable?.appendChild(row); 
    });
  }

  function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
  }

  displaySeries(series);
  const averageSeasons = calculateAverageSeasons(series);
  averageSeasonsElement!.textContent += ` ${averageSeasons.toFixed(2)}`;
});