export default function generateData({ amountOfRecords }) {
    const departments=['AM&C','SAPC','CBO','HC'];
    const names=['Rahul','Ram','Shyam','Rohan','Mukesh'];
    const titles=['Associate Analyst','Analyst','Consultant','Sr.Consultant'];
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: names[Math.floor(Math.random() * 5)],
            department: departments[Math.floor(Math.random() * 4)],
            title:  titles[Math.floor(Math.random() * 4)],
        };
    });
}