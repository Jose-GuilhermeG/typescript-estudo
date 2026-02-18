//condicional
const body = document.querySelector("body")
if (body) body.style.background = "red";

// non-null assertion (!)
const body2 = document.querySelector("body")! 
body2.style.background = "red";

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement 
body3.style.background = "red";

// HTMLElement
const input = document.querySelector(".input") as HTMLInputElement
input.value = "teste"