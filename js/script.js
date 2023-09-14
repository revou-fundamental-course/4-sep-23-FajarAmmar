document.addEventListener("DOMContentLoaded", function () {
     const inputFields = document.querySelectorAll(".input-field");
   //validation
     inputFields.forEach(function (input) {
       input.addEventListener("input", function () {
         this.value = this.value.replace(/[^0-9.]/g, "");
         this.classList.remove("error");
       });
     });

     // Fungsi untuk menghitung luas persegi
     function hitungLuasPersegi() {
          const sisi = parseFloat(document.getElementById('Inputsisipersegi').value);
          const luas = sisi * sisi;

          //validation 
          if (isNaN(sisi) || sisi <= 0) {
               alert('Masukkan nilai sisi yang valid (bilangan positif).');
               return;
           }
          
          document.querySelector('.result').style.display = 'block';
          document.getElementById('Persegi-luas').textContent = `L = ${sisi} x ${sisi}`;
          document.getElementById('Persegi-luas').innerHTML = '<br>';
          document.getElementById('Persegi-luas').textContent = `L = ${luas}`;
          document.querySelector('.luas').style.display = 'block';
          document.querySelector('.keliling').style.display = 'none';
          document.querySelector('.result').scrollIntoView();
      }
  
      // Fungsi untuk menghitung keliling persegi
      function hitungKelilingPersegi() {
          const sisi = parseFloat(document.getElementById('Inputsisipersegi').value);
          const keliling = 4 * sisi;

          if (isNaN(sisi) || sisi <= 0) {
               alert('Masukkan nilai sisi yang valid (bilangan positif).');
               return;
           }
     
          document.querySelector('.result').style.display = 'block';
          document.getElementById('Persegi-kel').textContent = `K = 4 x ${sisi} <br> `;
          document.getElementById('Persegi-kel').innerHTML = '<br>';
          document.getElementById('Persegi-kel').textContent = `K = ${keliling}`;
          document.querySelector('.keliling').style.display = 'block';
          document.querySelector('.luas').style.display = 'none';
          document.querySelector('.result').scrollIntoView();
      }

      document.querySelector('.btn-luas').addEventListener('click', hitungLuasPersegi);
      document.querySelector('.btn-kel').addEventListener('click', hitungKelilingPersegi);
   });
   