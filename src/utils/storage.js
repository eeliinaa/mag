import moment from 'moment'

const courses = [
    {
        id: 1,
        createdAt: '27/03/2019',
        category: "ReactJs",
        title: 'React Getting Started',
        // description: 'Course about ReactJS basic things',
        subtitle: 'To get an overview of what React is, you can write React code directly in HTML',
        description: `React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
      React is a tool for building UI components.`,
        logo: '/assets/logos/logo-dropbox.png',
        downloads: '594',
        progress: 50,
        spentHours: 22,
        publications: [
            {
                id: 1,
                title: "Setting up a React Environment",
                subtitle: "The quickest way start learning React is to write React directly in your HTML files.",
                lessons: [
                    {
                        id: 1,
                        // title: "Setting up a React Environment",
                        text: `If you have npx and Node.js installed, you can create a React application by using create-react-app.
                        If you have npx and Node.js installed, you can create a React application by using create-react-app.
                        If you have npx and Node.js installed, you can create a React application by using create-react-app.
                        If you have npx and Node.js installed, you can create a React application by using create-react-app.
                        If you have npx and Node.js installed, you can create a React application by using create-react-app.
                        If you have npx and Node.js installed, you can create a React application by using create-react-app.`,
                        images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                    },
                    {
                        id: 2,
                        title: "Run the React Application",
                        // title: "Run the React Application",
                        text: `Now you are ready to run your first real React application! Run this command to move to the my-react-app directory.
                        Now you are ready to run your first real React application! Run this command to move to the my-react-app directory.
                        Now you are ready to run your first real React application! Run this command to move to the my-react-app directory.
                        Now you are ready to run your first real React application! Run this command to move to the my-react-app directory.
                        Now you are ready to run your first real React application! Run this command to move to the my-react-app directory.
                        `,
                        images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                    }
                ],
                resources: [

                ],
                tasks: [

                ],
            },
            {
                id: 2,
                title: "Class Components",
                subtitle: "Introduction",
                lessons: [
                    {
                        id: 1,
                        // title: "222 Setting up a React Environment",
                        text: `A class component must include the extends React.Component statement. This statement creates an inheritance to React.
                        Component, and gives your component access to React.Component's functions.
                        The component also requires a render() method, this method returns HTML.`,
                        images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                    }
                ],
                resources: [

                ],
                tasks: [
                    {
                        id: 1,
                        title: 'Create Your First Component',
                        text: `When creating a React component, the component's name MUST start with an upper case letter.`
                    }

                ],
            },
            {
                id: 3,
                title: "Function Components",
                subtitle: "Introduction",
                lessons: [
                    {
                        id: 1,
                        // title: "222 Setting up a React Environment",
                        text: `A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.`,
                        images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                    }
                ],
                resources: [

                ],
                tasks: [
                    {
                        id: 1,
                        title: 'Rendering a Component',
                        text: `Now your React application has a component called Car, which returns an <h2> element.`
                    }
                ],
            },
            {
                id: 4,
                title: "Component Props",
                subtitle: "Components can be passed as props, which stands for properties.",
                lessons: [
                    {
                        id: 1,
                        // title: "222 Setting up a React Environment",
                        text: `Use an attribute to pass a color to the Car component, and use it in the render() function:
                         
                        function Car(props) {
                            return <h2>I am a {props.color} Car!</h2>;
                          }
                          
                          const root = ReactDOM.createRoot(document.getElementById('root'));
                          root.render(<Car color="red"/>);
                        `,
                        images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                    }
                ],
                resources: [

                ],
                tasks: [
                    {
                        id: 1,
                        title: 'Pass prop to a component',
                        text: `Props are like function arguments, and you send them into the component as attributes.`
                    }
                ],
            },
        ]
    },
    {
        id: 2,
        createdAt: '31/03/2019',
        description: 'Course about ReactJS components used in our company',
        logo: '/assets/logos/logo-medium.png',
        title: 'ReactJs components',
        downloads: '625',
        category: "ReactJs",
        progress: 100,
        publications: [{
            id: 1,
            title: "Component prop usage",
            subtitle: "The quickest way start learning React is to write React directly in your HTML files.",
            lessons: [
                {
                    id: 1,
                    title: "Properties 1",
                    text: "Lesson description 1",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                },
                {
                    id: 2,
                    title: "Properties 2",
                    text: "Lesson description 1",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                }
            ],
            tasks: [
                {
                    id: 1,
                    title: "Create Your First Component with props",
                    description: "When creating a React component, the component's name MUST start with an upper case letter.",
                }
            ]
        }]
    },
    {
        id: 3,
        createdAt: '03/04/2019',
        description: 'Learn basics of database',
        logo: '/assets/logos/logo-slack.png',
        title: 'Database',
        downloads: '857',
        category: "C#",
        progress: 0,
        publications: [{
            id: 1,
            title: "Database intro",
            subtitle: "Get to know database",
            lessons: [
                {
                    id: 1,
                    title: "History",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                },
                {
                    id: 2,
                    title: "Usage",
                    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                }
            ],
            tasks: [
                // {
                //     id: 1,
                //     title: "Create Your First DBreeze database",
                //     description: "When creating a React component, the component's name MUST start with an upper case letter.",
                // }
            ]
        },
        {
            id: 2,
            title: "Database functions",
            subtitle: "Get to know database",
            lessons: [
                {
                    id: 1,
                    title: "Get data",
                    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                },
                {
                    id: 2,
                    title: "Save data",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                }
            ],
            tasks: [
                {
                    id: 1,
                    title: "Create Your First database",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        }]
    },
    {
        id: 4,
        createdAt: '04/04/2019',
        description: 'Get to know JSON structure',
        logo: '/assets/logos/logo-lyft.png',
        title: 'JSON structure',
        downloads: '406',
        category: "C#",
        publications: [{
            id: 1,
            title: "Setting up a React Environment",
            subtitle: "The quickest way start learning React is to write React directly in your HTML files.",
            lessons: [
                {
                    id: 1,
                    title: "Class Component",
                    text: "Lesson description 1",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                },
                {
                    id: 2,
                    title: "Function Component",
                    text: "Lesson description 1",
                    images: [{ src: 'https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg' }]
                }
            ],
            tasks: [
                {
                    id: 1,
                    title: "Create Your First Component",
                    text: "When creating a React component, the component's name MUST start with an upper case letter.",
                }
            ]
        }]
    },
]

function eventsFunk() {
    const f = "DD/MM/YYYY"
    // const events = () => {
    let arr = []
    let id = 0
    const dt = "Course"
    const d = [
        { start: moment("02/05/2023", f), end: moment("05/05/2023", f) },
        { start: moment("08/05/2023", f), end: moment("12/05/2023", f) },
        { start: moment("15/05/2023", f), end: moment("17/05/2023", f) },
        { start: moment("22/05/2023", f), end: moment("28/05/2023", f) },
        { start: moment("01/06/2023", f), end: moment("7/06/2023", f) },
    ]
    d.forEach(e => {
        const title = dt
        // const days = Math.floor(Math.random() * (5 - 1 + 1) + 1) // Math.floor(Math.random() * (max - min + 1) + min)
        // const start = moment().add(index, 'days')//moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))//moment().add(-days, 'days')
        // const end = start.add(1, 'days')
        const category = 1
        const event = { id: ++id, title, start: e.start, end: e.end, category }
        arr.push(event)
    });
    // for (let index = 0; index < 10; index++) {
    //     // const element = array[index];
    //     const title = dt
    //     const days = Math.floor(Math.random() * (5 - 1 + 1) + 1) // Math.floor(Math.random() * (max - min + 1) + min)
    //     const start = moment().add(index, 'days')//moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))//moment().add(-days, 'days')
    //     const end = start.add(1, 'days')
    //     const category = 1
    //     const event = { id: ++id, title, start, end, category }
    //     arr.push(event)
    // }
    // for (let index = 0; index < 3; index++) {
    //     // const element = array[index];
    //     const title = "Diary"
    //     const days = Math.floor(Math.random() * (5 - 1 + 1) + 1) // Math.floor(Math.random() * (max - min + 1) + min)
    //     const start = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))//moment().add(-days, 'days')
    //     const end = start.add(1, 'days')
    //     const category = 0
    //     const event = { id: ++id, title, start, end, category }
    //     arr.push(event)
    // }
    return arr
}
const events = eventsFunk()

const diaryItems = [
    {
        id: 1,
        date: moment().weekday(1),
        rate: 5,
        task: "React basic",
        notes: "Introduction only"
    },
    {
        id: 2,
        date: moment().weekday(2),
        rate: 4,
        task: "React basic",
        notes: "Get to know what React is"
    },
    {
        id: 3,
        date: moment().weekday(3),
        rate: 4,
        task: "React basic",
        notes: ""
    },
    {
        id: 4,
        date: moment().weekday(4),
        rate: 4,
        task: "React basic",
        notes: "Forst task passed"
    },
    {
        id: 5,
        date: moment().weekday(5),
        rate: 2,
        task: "React basic",
        notes: ""
    },
]

const hintMessages = [
    {
        id: 1,
        text: 'Solve the problem first and then write the code. Don’t start coding without knowing what to do.'
    },
    {
        id: 2,
        text: 'Don’t memorize code, instead understand the logic.'
    },
    { id: 3, text: 'If you copy and paste a stack overflow solution, make sure you understand it. Learn to use Stack Overflow in a good way.' },
    { id: 4, text: 'If you want to learn something, practice. Make examples and make them work because read about something is not enough.' },
    { id: 5, text: 'Know how to google stuff. For this, you need to have experience and read a lot to know what to look for.' },
]
const motivationalMessages = [
    { id: 1, text: 'Rest, Rest, and Rest. The best way to solve a problem is to have a restful mind.' },
    { id: 2, text: 'Programming is the art of algorithm design and the craft of debugging errant code. -Ellen Ullman' },
    { id: 3, text: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ― Rick Cook ' },
    { id: 4, text: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language. ― Ram Ray' },
]

const usersReports = [
    {
        id: 1, progress: 2, courses: [
            { id: 1, start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, start: "28/01/2023", end: "20/02/2023", duration: "23 days", status: 0, mark: "8" },
        ]
    },
    {
        id: 2, progress: 4, courses: [
            { id: 1, start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, start: "28/01/2023", end: "20/02/2023", duration: "23 days", status: 1, mark: "6" },
            { id: 3, start: "01/02/2023", end: "10/03/2023", duration: "32 days", status: 2, mark: "5" },
        ]
    },
    {
        id: 3, progress: 1, courses: [
            { id: 1, start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, start: "28/01/2023", end: "20/02/2023", duration: "23 days", status: 1, mark: "6" },
            { id: 3, start: "01/02/2023", end: "10/03/2023", duration: "32 days", status: 2, mark: "5" },
        ]
    },
    {
        id: 4, progress: 6, courses: [
            { id: 1, start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, start: "28/01/2023", end: "20/02/2023", duration: "23 days", status: 1, mark: "6" },
            { id: 3, start: "01/02/2023", end: "10/03/2023", duration: "32 days", status: 2, mark: "5" },
        ]
    },
    {
        id: 5, progress: 4, courses: [
            { id: 1, start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, start: "28/01/2023", end: "20/02/2023", duration: "23 days", status: 1, mark: "6" },
            { id: 3, start: "01/02/2023", end: "10/03/2023", duration: "32 days", status: 2, mark: "5" },
        ]
    },
]
const coursesReports = [
    {
        id: 1, users: [
            { id: 1, name: "Kate Willow", start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, name: "Lee Willow", start: "23/02/2023", end: "28/02/2023", duration: "5 days", status: 0, mark: "8" },
            { id: 3, name: "Jack Tree", start: "02/03/2023", end: "15/03/2023", duration: "13 days", status: 2, mark: "9" },
        ],
    },
    {
        id: 2, users: [
            { id: 1, name: "Pete Willow", start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "8" },
            { id: 2, name: "Lee Willow", start: "23/02/2023", end: "28/02/2023", duration: "5 days", status: 2, mark: "7" },
            { id: 3, name: "Renne Pike", start: "02/03/2023", end: "15/03/2023", duration: "13 days", status: 1, mark: "6" },
        ],
    },
    {
        id: 3, users: [
            { id: 1, name: "Mark Flower", start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "4" },
            { id: 2, name: "Anna Demo", start: "23/02/2023", end: "28/02/2023", duration: "5 days", status: 1, mark: "6" },
            { id: 3, name: "Timmy Tree", start: "02/03/2023", end: "15/03/2023", duration: "13 days", status: 0, mark: "8" },
        ],
    },
    {
        id: 4, users: [
            { id: 1, name: "Kate Willow", start: "12/01/2023", end: "25/01/2023", duration: "13 days", status: 1, mark: "7" },
            { id: 2, name: "Lee Willow", start: "23/02/2023", end: "28/02/2023", duration: "5 days", status: 0, mark: "8" },
            { id: 3, name: "Jack Tree", start: "02/03/2023", end: "15/03/2023", duration: "13 days", status: 2, mark: "9" },
        ],
    }
]

const users = [
    { id: 1, name: 'Anna Ozola', createdAt: '12/01/2023', role: "User", email: "dummy@demo.com" },
    { id: 2, name: 'Kristaps Zīle', createdAt: '01/01/2023' , role: "User", email: "dummy@demo.com" },
    { id: 3, name: 'Mārcis Zvērs', createdAt: '12/12/2022' , role: "User", email: "dummy@demo.com" },
    { id: 4, name: 'Sanita Aka', createdAt: '26/01/2023' , role: "User", email: "dummy@demo.com" },
    { id: 5, name: 'Marta Broša', createdAt: '12/02/2023' , role: "User", email: "dummy@demo.com" },
]

export {
    courses,
    events,
    diaryItems,
    hintMessages,
    motivationalMessages,
    usersReports,
    coursesReports,
    users
}