var img = ["apple","chest","cobble","crafting_table","diamond","dirt","dirt_with_grass","furnace","furnace_active","grass","iron","leaves","log","plank","sapling","stone","torch","water"];
function add_img(image_name, image_index, image_array) {
  document.getElementById("img").innerHTML += "<img id=\"" + image_name + "\" src=\"resources/" + image_name + ".png\">";
}
img.forEach(add_img);
