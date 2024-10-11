




var resumeForm = document.getElementById('resumeForm');
var resumeDiv = document.getElementById('resume');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture Form Data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var university = document.getElementById('university').value;
    var highSchool = document.getElementById('highSchool').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate Resume Content
    var resumeHTML = "\n        <section id=\"personal-info\" class=\"section\">\n            <h2>Personal Information</h2>\n            <div class=\"profile\">\n                <div class=\"info\">\n                    <h1>".concat(name, "</h1>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                    <p>LinkedIn: ").concat(linkedin, "</p>\n                    <p>GitHub: ").concat(github, "</p>\n                </div>\n            </div>\n        </section>\n\n        <section id=\"education\" class=\"section\">\n            <h2>Education</h2>\n            <ul>\n                <li><strong>University:</strong> ").concat(university, "</li>\n                <li><strong>High School:</strong> ").concat(highSchool, "</li>\n            </ul>\n        </section>\n\n        <section id=\"work-experience\" class=\"section\">\n            <h2>Work Experience</h2>\n            <p>").concat(workExperience || 'No experience provided', "</p>\n        </section>\n\n        <section id=\"skills\" class=\"section\">\n            <h2>Skills</h2>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        </section>\n    ");
    // Display Resume
    resumeDiv.innerHTML = resumeHTML;
    resumeDiv.style.display = 'block';
});






document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resumeForm');
    const resumeDiv = document.getElementById('resume');

    if (resumeForm && resumeDiv) {
        resumeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Capture Form Data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const linkedin = document.getElementById('linkedin').value;
            const github = document.getElementById('github').value;
            const university = document.getElementById('university').value;
            const highSchool = document.getElementById('highSchool').value;
            const workExperience = document.getElementById('workExperience').value;
            const skills = document.getElementById('skills').value.split(',');

            // Generate Resume Content
            const resumeHTML = `
                <section id="personal-info" class="section">
                    <h2>Personal Information</h2>
                    <div class="profile">
                        <div class="info">
                            <h1>${name}</h1>
                            <p>Email: ${email}</p>
                            <p>Phone: ${phone}</p>
                            <p>LinkedIn: ${linkedin}</p>
                            <p>GitHub: ${github}</p>
                        </div>
                    </div>
                </section>

                <section id="education" class="section">
                    <h2>Education</h2>
                    <ul>
                        <li><strong>University:</strong> ${university}</li>
                        <li><strong>High School:</strong> ${highSchool}</li>
                    </ul>
                </section>

                <section id="work-experience" class="section">
                    <h2>Work Experience</h2>
                    <p>${workExperience || 'No experience provided'}</p>
                </section>

                <section id="skills" class="section">
                    <h2>Skills</h2>
                    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                </section>
            `;

            // Display Resume
            resumeDiv.innerHTML = resumeHTML;
            resumeDiv.style.display = 'block';
        });
    }
});