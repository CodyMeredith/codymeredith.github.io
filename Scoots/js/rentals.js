fetch("/codymeredith.github.io/Scoots/JSON/rental_data.json")
  .then((response) => response.json())
  .then((jsonObject) => {
      console.log(jsonObject);

      document.getElementById("rental_type1").innerText = jsonObject.rentals[0].rental_type;
      document.getElementById("max_persons1").innerText = jsonObject.rentals[0].max_persons;
      document.getElementById("res_half1").innerText = jsonObject.rentals[0].cost.half_day.reservation;
      document.getElementById("res_full1").innerText = jsonObject.rentals[0].cost.full_day.reservation;
      document.getElementById("walk_half1").innerText = jsonObject.rentals[0].cost.half_day.walk_in;
      document.getElementById("walk_full1").innerText = jsonObject.rentals[0].cost.full_day.walk_in;

      document.getElementById("rental_type2").innerText = jsonObject.rentals[1].rental_type;
      document.getElementById("max_persons2").innerText = jsonObject.rentals[1].max_persons;
      document.getElementById("res_half2").innerText = jsonObject.rentals[1].cost.half_day.reservation;
      document.getElementById("res_full2").innerText = jsonObject.rentals[1].cost.full_day.reservation;
      document.getElementById("walk_half2").innerText = jsonObject.rentals[1].cost.half_day.walk_in;
      document.getElementById("walk_full2").innerText = jsonObject.rentals[1].cost.full_day.walk_in;

      document.getElementById("rental_type3").innerText = jsonObject.rentals[2].rental_type;
      document.getElementById("max_persons3").innerText = jsonObject.rentals[2].max_persons;
      document.getElementById("res_half3").innerText = jsonObject.rentals[2].cost.half_day.reservation;
      document.getElementById("res_full3").innerText = jsonObject.rentals[2].cost.full_day.reservation;
      document.getElementById("walk_half3").innerText = jsonObject.rentals[2].cost.half_day.walk_in;
      document.getElementById("walk_full3").innerText = jsonObject.rentals[2].cost.full_day.walk_in;

      document.getElementById("rental_type4").innerText = jsonObject.rentals[3].rental_type;
      document.getElementById("max_persons4").innerText = jsonObject.rentals[3].max_persons;
      document.getElementById("res_half4").innerText = jsonObject.rentals[3].cost.half_day.reservation;
      document.getElementById("res_full4").innerText = jsonObject.rentals[3].cost.full_day.reservation;
      document.getElementById("walk_half4").innerText = jsonObject.rentals[3].cost.half_day.walk_in;
      document.getElementById("walk_full4").innerText = jsonObject.rentals[3].cost.full_day.walk_in;

      document.getElementById("rental_type5").innerText = jsonObject.rentals[4].rental_type;
      document.getElementById("max_persons5").innerText = jsonObject.rentals[4].max_persons;
      document.getElementById("res_half5").innerText = jsonObject.rentals[4].cost.half_day.reservation;
      document.getElementById("res_full5").innerText = jsonObject.rentals[4].cost.full_day.reservation;
      document.getElementById("walk_half5").innerText = jsonObject.rentals[4].cost.half_day.walk_in;
      document.getElementById("walk_full5").innerText = jsonObject.rentals[4].cost.full_day.walk_in;

      document.getElementById("rental_type6").innerText = jsonObject.rentals[5].rental_type;
      document.getElementById("max_persons6").innerText = jsonObject.rentals[5].max_persons;
      document.getElementById("res_half6").innerText = jsonObject.rentals[5].cost.half_day.reservation;
      document.getElementById("res_full6").innerText = jsonObject.rentals[5].cost.full_day.reservation;
      document.getElementById("walk_half6").innerText = jsonObject.rentals[5].cost.half_day.walk_in;
      document.getElementById("walk_full6").innerText = jsonObject.rentals[5].cost.full_day.walk_in;

  });

