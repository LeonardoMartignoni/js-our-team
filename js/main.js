// Output Var
const teamMembersEl = document.getElementById('team_members_row');

const teamMembers = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        imgpath: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        imgpath: './img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        imgpath: './img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        imgpath: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        imgpath: './img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        imgpath: './img/barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamMembers);

for (const property in teamMembers) {
    teamMembersEl.innerHTML += `
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 16rem;">
            <img src="${teamMembers[property].imgpath}" class="card-img-top" alt="${teamMembers[property].name} ${teamMembers[property].surname} team image">
            <div class="card-body text-center">
                <p class="team_name card-text mb-0 fw-bold">${teamMembers[property].name} ${teamMembers[property].surname}</p>
                <p class="team_role card-text fw-light">${teamMembers[property].role}</p>
            </div>
        </div>
    </div>
    `
};