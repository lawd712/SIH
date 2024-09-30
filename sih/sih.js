function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to edit profile
function editProfile() {
    alert('Edit Profile feature coming soon!');
}

// Data simulation
const academicOverview = {
    marks: [85, 90, 78, 88],
};

const attendanceRecord = {
    present: 18,
    absent: 2,
};

const assignments = [
    { subject: 'Math', dueDate: '2024-10-01', status: 'Pending' },
    { subject: 'Science', dueDate: '2024-10-05', status: 'Completed' },
];

const reportCards = [
    { term: 'Term 1', marks: [85, 90, 78], remarks: 'Good performance.' },
    { term: 'Term 2', marks: [88, 85, 80], remarks: 'Satisfactory.' },
];

// Function to display academic overview data
function displayAcademicOverview() {
    const academicSection = document.getElementById('academic-overview');
    academicSection.innerHTML += `<p>Marks: ${academicOverview.marks.join(', ')}</p>`;
}

// Function to display attendance data
function displayAttendance() {
    const attendanceSection = document.getElementById('attendance');
    attendanceSection.innerHTML += `<p>Present Days: ${attendanceRecord.present}</p>`;
    attendanceSection.innerHTML += `<p>Absent Days: ${attendanceRecord.absent}</p>`;
}

// Function to display assignments
function displayAssignments() {
    const assignmentsSection = document.getElementById('assignments');
    assignments.forEach((assignment) => {
        assignmentsSection.innerHTML += `<p>${assignment.subject}: Due on ${assignment.dueDate} - Status: ${assignment.status}</p>`;
    });
}

// Function to display report cards
function displayReportCards() {
    const reportCardSection = document.getElementById('report-cards');
    reportCards.forEach((report) => {
        reportCardSection.innerHTML += `<p>${report.term}: Marks - ${report.marks.join(', ')} - Remarks: ${report.remarks}</p>`;
    });
}

// Initialize dashboard with data
window.onload = function() {
    displayAcademicOverview();
    displayAttendance();
    displayAssignments();
    displayReportCards();
};
