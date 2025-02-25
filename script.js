

document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    button.innerText = "Ẩn nội dung";
    document.body.appendChild(button);

    let content = document.querySelector(".main");
    button.addEventListener("click", function() {
        if (content.style.display === "none") {
            content.style.display = "block";
            button.innerText = "Ẩn nội dung";
        } else {
            content.style.display = "none";
            button.innerText = "Hiện nội dung";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const students = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Thị D",
    "Hoàng Văn E",
    // Thêm tiếp danh sách thành viên ở đây...
  ];

  const container = document.querySelector(".member-list");

  students.forEach((name, index) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");

    const imgElement = document.createElement("img");
    imgElement.src = `images/avatar${index + 1}.jpg`; // Đặt ảnh theo số thứ tự
    imgElement.onerror = () => { imgElement.src = "images/default-avatar.jpg"; }; // Nếu ảnh lỗi, dùng ảnh mặc định
    imgElement.alt = name;

    const nameElement = document.createElement("h3");
    nameElement.textContent = name;

    memberDiv.appendChild(imgElement);
    memberDiv.appendChild(nameElement);
    container.appendChild(memberDiv);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add("visible");
      }
    });    
document.querySelectorAll('.activity img').forEach(img => {
    img.addEventListener('click', function() {
        alert("Bạn đang xem ảnh: " + this.alt);
    });
});	