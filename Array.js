// Array

let a=[];
a.push(10,20,30);
console.log(a);
a.unshift(5);
console.log(a);
a.shift();
console.log(a);

let arr=[10,20,30,50,70,100,120]
console.log(arr[6])

let abc="Welcome to Copilot"
console.log(abc[11])

let Arr = ["one",2,"three",4]
    console.log(Arr[1]+Arr[3]);
    console.log(Arr[0]);

// Array Methods

let fruit =["Apple","Orange","Banana","Kiwi"]
console.log(fruit);
fruit.push("Avacado")
console.log(fruit)
fruit.pop();
console.log(fruit);
fruit.unshift("Fig")
console.log(fruit)
fruit.shift()
console.log(fruit);

let company = [
    "Trendnologies Pvt Ltd",
    2025,
    ["Bangalore","Chennai","Coimbatore"],
    {
        department: "QA",
        employees: [
            { name: "Likhitha", role: "Data Analyst", skills: ["Python","Java","SQL"]},
            { name: "Neha", role: "Data Analyst", skills: ["Python","Java","SQL"]},
            { name: "Suma", role: "QA Analyst", skills: ["Playwright","Selenium","API testing"]}
        ]
    },
    [
        { project: "Autoshop360", status:"Ongoing"},
        {project: "QuickCart", status: "Completed"}
    ]
];

console.log(company[3].employees[0].skills[1])
console.log(company[3].employees[2].role)
console.log(company[3].employees[1].skills[2])
console.log(company[2][1])

//Array
let organization = [
    "TechCorp International",
    1999,
    true,
    null,
    ["India","USA",["Bangalore","New York",["Koramangala","Brooklyn"]]],
    {
        department: "Engineering",
        teams: [
            {
                name: "QA",
                members: [
                    { id: 1, name: "Muthu Kannan", skills: ["Playwright", "Selenium"], available: true },
                    { id: 2, name: "Pradeep", skills: ["Java", "Spring Boot", ["Docker", "Kubernetes"]], available: false }
                ]
            },
            {
                name: "Development",
                members: [
                    { id: 3, name: "Sandhiya", skills: ["React", "Node.js"], available: true },
                    { id: 4, name: "Vaishnavi", skills: ["Python", "Django", { cloud: ["AWS", "Azure", "GCP"] }], available: true }
                ]
            }
        ]
    },
    [
        { project: "AutoShop360", status: "Ongoing", tasks: ["UI Testing", "API Automation"] },
        { project: "QuickCart", status: "Completed", tasks: [{ sprint: 1, bugs: 12}, { sprint: 2, bugs: 5 }] }
    ]
];