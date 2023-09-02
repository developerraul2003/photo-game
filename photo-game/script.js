document.onmousemove = (e) => {
  let img = document.createElement("img");
  img.src = "image/fighter jet.webp";
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.position = "absolute";
  img.style.left = e.pageX + "px";
  img.style.top = e.pageY + "px";
  img.animate([{ opacity: 0 }], { duration: 400 }).onfinish = () =>
    img.remove();
  document.body.append(img);
};
