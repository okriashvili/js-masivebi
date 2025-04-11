// მასივები ჯავასკრიპტში
// მასივები - რამოდენიმე მონაცემის გაერთიენებაა ერთ ცვლადში, განურჩევლად მონაცემთა ტიპისა
// var masivi = [1, "hello", 5, "wolrd" ];
// masivi.push = "john"

// document.write(masivi[4]);



// საკლასო დავალება 1 
var x = [12, 5, 43, 20, 23, 21, 67, 29, 26, 100]
var y = 0
while(y < x.length){
    document.write(x[y] + "<br>")
    y++
}
/*ეს კოდი x ცვლადის ელემენტებს გამოიტანს ეკრანზე/ 10 ელემენტი გვაქნს ცვლადში, 
კომპიუტერი იქამდე ამოიტანს ელემემტებს სანამ y ცვლადი არ გგაუტოლდება  \ცვადში არსებული ელემენტების რაოდენობას */

// მასივებში ელემენტები იწერება [ კვადრატულ ფრჩხილებში და გამიყოფა მძივით ერთმამნდეთისგან ]



// ოპერაციები მასივებში 



// ელემენტის დამატება
// masivi.push - მასივის ბოლოში ამატებს ელემენტს
var masivi = [1, 3, 545, "hello world", "masivi"]
// მასივში ელემენტის დამატებისას ის იწერება ჩვეულებრივ ფრჩხილებში და არა [ კვადრატულ ფრჩხილებში ]
masivi.push("i'm last element, i was added by using -push- operation")
document.write("<br>" + masivi)

// იგივენაირად მუშაობს unshift მეთოდი მაგრამ ის დასასწყისში ამატებს ელემენტს და არა ბოლოში, სინტაქსიც იგივენაირია
masivi.unshift("i'm first element, i was added by using -unshift- operation")
document.write("<br>" + masivi)



// ელემენტის წაშლა
// pop მეთოდი კი შლის ელემენტს მასივის ბოლოში
//სინტაქსი იგივეა რაც დამატებისას, მაგრამ ფრჩხილებში არაფერს ვწერთ
var masivi1 = [1, 343, 35, "hello world once more", 565, 23]
masivi1.pop()
document.write("<br>" + "<br>" + masivi1) 

// shift მეთოდი კი მასივის დასაწყისში შლის ელემენტს
// სინტაქსი იგივეა რაც pop მეთოდი
masivi1.shift()
document.write("<br>" + "<br>" + masivi1) 



// masivi.lenght რამდენი ელემენტისგან შედგება მასივი ვიგებთ .length მეთოდით
var masivi2 = [1, 56, 788, "hello world 3rd time", "blablabla"]
document.write("<br>" + "<br>" + masivi2.length)
// როგორც ჩანს ჩვემი მასივი შედგება 5 ელემენტისგან: 0, 1, 2, 3, 4.



// .includes ფუნქციით ვიგებთ შეუცავს თუ არ ჩვენი მასივი მითითებულ ელემენტს
// .includes() - ფრჩხილებში გადაეცემა არგუმენტი, მასივი შეიცავს თუ არა მითითებულ ელემენტს და გამოაქვს true/false 
var g = masivi2.includes(1)
document.write("<br>" + g + "<br>")
// როგორც ჩანს მასივში გვქვს "1" იანი ელემენტი და გამოიტანა true



// .indexOf - ვიგებთ ჩვენი ელემენტის ნუმერაციას მასივებში
var numeration = [2, 45, 234, "hello world", "hello everyone"] 
document.write(numeration.indexOf(234))
// როგორც ვიცით ნუმერაცია მასივებში იწყება 0-დან, ამიტომ '234' ელემენტს აქვს მეორე ნუმერაცია



// .concut - ოპერაცია ორ მასივს აერთიანებს და ამატებს ერთნამეთს
var arry1 = [2, 456, 34, "hello"]
var arry2 = ["world", 3, 143, 67]
document.write("<br>" + arry1.concat(arry2))
//ორი მასივი გააერთიანა concat ოპერაციამ


// splice და slice ოპერაციები
var arry3 = [3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false]
document.write("<br>" + arry3.slice(1, 4))
// slice ოპერაცია ამოჭრის ეეენტებს და ამოჭრილ ელემენტებს გამოიტანს კომპიუტერში
// slice - გადაეცემა ორი არგუმენტი ფრჩხილებში ==> 
// პირველი ციფრი წარმოადგენს რომელი ელემენტიდან დაიწყოს ამოჭრა 
// მეორე ციფრი კი რომელ ელემენტამდე ამოჭრას. ანუ მის წინა ციფრს ამოჭრის

var arry4 = [3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false]
document.write("<br>" + arry4.splice(3, 5))
//  splice-ს გადაეცემა ორი არგუმენტი 
// პირვეი ციფრი ნიშნავს რომელი ელემენტიდან დაიჭყოს ამოჭრა
// მეორე ციფრი კი პირველი არგუმენტით აღნიშნული ელემენტიდან შედგომ რამდენი ელემენტი ამოჭრას, 
// ანუ საწყისი ელემენტიდან დაწყებული რამდენი ელემენტი ამჭრას
// splice ამოჭრილ ელემენტებს გამოგიტანთ ეკრანზე




// საკლასო დავალება, მისივის ელემენტების გამოტაანა ციკლების დახმარებით
var mas = [3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false, 3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false, 3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false,
    3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false, 3, 464, 232, 3, 464, 3, 464, 3, 464, 3, 464, true, false,
]
index = 0
while(index < mas.length){
    document.write(mas[index] + "<br>")
    index++
}
// მასივის ელემენტების გამოსატანად შევქმენით ცაკლეული ცვლადი სახელად index, 
// index გავუტოლეთ ნულს, შემდგომ ის შევიტანეთ ციკლში, რომელსაც გადავეცით არგუმენტი რომ ==>
// იმოძროას წრეზე იქამდე სანამ ის არ გაუტოლდება მასივებში ჩაწერილ ელემენტების რაოდენებას 
// 
