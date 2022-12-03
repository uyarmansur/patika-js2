var liste = document.querySelector("#list");
var listen = document.querySelector("#ekle");
var yapilacak = document.querySelector("#task");
var alertWarning = document.querySelector(".alert-warning");
listen.addEventListener("submit", newElement);
function newElement(event) {
  event.preventDefault();
  if (yapilacak.value != "") {
    const eklenecek = document.createElement("li");
    eklenecek.innerHTML = yapilacak.value;
    liste.appendChild(eklenecek);
    yapilacak.value = "";

    const span = document.createElement("span");
    span.innerHTML = "Sil";
    eklenecek.appendChild(span);
    alert("Listeye Eleman Başarıyla Eklendi")
  } else {
    alert("Bu Alan Boş Olamaz!")
  }

  const kapat = document.querySelectorAll("#list span");
  for (let i = 0; i < kapat.length; i++) {
    kapat[i].addEventListener("click", () => {
      kapat[i].parentElement.style.display = "none";
      kapat[i].parentElement.remove();
      alert("Başarıyla Silindi!")
    });
  }
}
