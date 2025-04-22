let stars = prompt("Enter the number of starts: ");
/*
Print Stars
*/
for(let i=0;i<stars;i++){
    for(let j=0;j<=i;j++){
        document.write(`*`);
    }
    document.write(`<br>`);
}

/*
Reverse Stars
*/
// for(let i=1;i<=stars;i++){
//     for(let j=stars;j>=i;j--){
//         document.write(`*`);
//     }
//     document.write(`<br>`);
// }

