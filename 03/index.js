const texto = "Aprenda programar do zero na Cubos Academy";

function replaceAll(original, text, newText) {
    while ((original !== original.replace(text, newText))) {
        original = original.replace(text, newText);
    }
    return original;
}
console.log(replaceAll(texto, " ", "-"));