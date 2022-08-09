// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

//Area = rootOver(s(s-a)(s-b)(s-c))
//here s=semi perimeter=((a+b+c)/2)

function areaOfTriangle(side1, side2, side3) {
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let s = semiPerimeter;
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return parseFloat(area.toFixed(2));
}

let side1 = 3;
let side2 = 6;
let side3 = 7;

let area = areaOfTriangle(side1, side2, side3);
console.log(area);