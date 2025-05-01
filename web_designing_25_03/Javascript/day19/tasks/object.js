var employee = {
  id: 1,
  name: "ankit",
  sal: 123456,
  city: ["bombay", "chennai"],
  desigintion: { manager: true, hr: false },
  ornganization: [
    "kalwa",
    "thane",
    ["banglore", "Tamil Nadu"],
    "kerla",
    [{ branches: "kalyan", id: 23 }],
  ],
};

//   take out city bombay,ornganization ->"banglore","Tamil Nadu",id->23

document.write(employee.city[0]);
console.log(employee.city[0]);

document.write(`<br>`);

document.write(employee.ornganization[2][0]);
console.log(employee.ornganization[2][0]);

document.write(`<br>`);

document.write(employee.ornganization[2][1]);
console.log(employee.ornganization[2][1]);

document.write(`<br>`);

document.write(employee.ornganization[4][0].id);
console.log(employee.ornganization[4][0].id);
