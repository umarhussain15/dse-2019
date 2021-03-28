const semesters = [
    {
        id: 'ws2019',
        name: 'Winter Semester - 2019/2020',
        current: 2019,
        prev: 2018,
        select: false
    },
    {
        id: 'ss2020',
        name: 'Summer Semester - 2020',
        current: 2020,
        prev: 2019,
        select: false
    },
    {
        id: 'ws2020',
        name: 'Winter Semester - 2020/2021',
        current: 2020,
        prev: 2019,
        select: false
    },
    {
        id: 'ss2021',
        name: 'Summer Semester - 2021',
        current: 2021,
        prev: 2020,
        select: true
    }
]
const courses = {
    ws2019: [
        {
            name: 'Systems Engineering 1',
            module: 'DSE-M1 (Systems Engineering)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_1',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_1/wintersemester-2019-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_1/wintersemester-2018-2019',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110631001'
        },
        {
            name: 'Systems Engineering 2',
            module: 'DSE-M1 (Systems Engineering)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_2',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_2/wintersemester-2019-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/systems_engineering_2/wintersemester-2018-2019',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110631002'
        },
        {
            name: 'Distributed Systems',
            module: 'DSE-M2 (Ubiquitous Systems)',
            home: 'http://www.inf.tu-dresden.de/index.php?node_id=2568&ln=en&lv_id=24',
            current: 'http://www.inf.tu-dresden.de/index.php?node_id=2568&ln=en&lv_id=24'
        },
        {
            name: 'Mobile Communication/Computing',
            module: 'DSE-M2 (Ubiquitous Systems)',
            home: 'http://www.inf.tu-dresden.de/index.php?node_id=2568&ln=en&lv_id=16',
            current: 'http://www.inf.tu-dresden.de/index.php?node_id=2568&ln=en&lv_id=16',
        },
        {
            name: 'Transactional Information Systems',
            module: 'DSE-M3 (Transactional & Secure Platforms)',
            home: 'https://wwwdb.inf.tu-dresden.de/study/teaching/winter-term-2019-20/transactional-information-systems/',
            current: 'https://wwwdb.inf.tu-dresden.de/study/teaching/winter-term-2019-20/transactional-information-systems/',
            prev: 'https://wwwdb.inf.tu-dresden.de/study/teaching/teaching-archive/winter-term-2018-19/transactional-information-systems/'
        },
        {
            name: 'Security and Cryptography I',
            module: 'DSE-M3 (Transactional & Secure Platforms)',
            home: 'https://tu-dresden.de/ing/informatik/sya/ps/studium/lectures/sac-i',
            current: 'https://tu-dresden.de/ing/informatik/sya/ps/studium/lectures/sac-i'
        },
        {
            name: 'Design Patterns And Framework',
            module: 'DSE-M4 (System Design)',
            home: 'https://tu-dresden.de/ing/informatik/smt/st/studium/lehrveranstaltungen?leaf=1&lang=en&subject=409&embedding_id=47eddfa7c5a54ed5be49042aff35a31b',
            current: 'https://tu-dresden.de/ing/informatik/smt/st/studium/lehrveranstaltungen?leaf=1&lang=en&subject=409&embedding_id=47eddfa7c5a54ed5be49042aff35a31b'
        }
    ],
    ss2020: [
        {
            name: 'Security and Cryptography II',
            module: 'DSE-E1 (Advanced Security and Cryptography)',
            home: 'https://tu-dresden.de/ing/informatik/sya/ps/studium/lectures/sac-ii',
            current: 'https://tu-dresden.de/ing/informatik/sya/ps/studium/lectures/sac-ii'
        }, {
            name: 'Wireless Sensor Networks',
            module: 'DSE-E2 (Wireless Sensor Networks)',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-rechnernetze/studium/lehrveranstaltungen/lehrveranstaltungsdetails?ln=en&lv_id=45',
            current: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-rechnernetze/studium/lehrveranstaltungen/lehrveranstaltungsdetails?ln=en&lv_id=45'
        }, {
            name: 'Distributed Operating Systems',
            module: 'DSE-E3 (Distributed Operating Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/dos',
            current: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/dos',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110804132'
        }, {
            name: 'Component-Based Software Engineering',
            module: 'DSE-E4 (Component-Based Software Engineering)',
            home: 'https://tu-dresden.de/ing/informatik/smt/st/studium/lehrveranstaltungen?leaf=1&lang=en&subject=394&embedding_id=47eddfa7c5a54ed5be49042aff35a31b',
            current: 'https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/23119134765',
            prev: 'https://tu-dresden.de/ing/informatik/smt/st/studium/lehrveranstaltungen?subject=394&lang=en&leaf=1&head=2&embedding_id=47eddfa7c5a54ed5be49042aff35a31b',
        }, {
            name: 'Internet and Web Applications',
            module: 'DSE-E5 (Selected Areas of Internet-based Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-rechnernetze/studium/lehrveranstaltungen/lehrveranstaltungsdetails?ln=en&lv_id=50',
            current: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-rechnernetze/studium/lehrveranstaltungen/lehrveranstaltungsdetails?ln=en&lv_id=50'
        }, {
            name: 'Foundations of Concurrent and Distributed Systems',
            module: 'DSE-E6 (Concurrent and Distributed Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/foundations-of-concurrent-and-distributed-systems-1',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/foundations-of-concurrent-and-distributed-systems-1/fcds-summer-term-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/foundations-of-concurrent-and-distributed-systems-1/fcds-summer-term-2019',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110631015'
        }, {
            name: 'Lab: Concurrent and Distributed Systems',
            module: 'DSE-E6 (Concurrent and Distributed Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/concurrent_and_distributed_systems_lab?set_language=en&cl=en',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/concurrent_and_distributed_systems_lab/summer-semester-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/concurrent_and_distributed_systems_lab/summer-semester-2019',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/2023686'
        }, {
            name: 'Software Fault Tolerance',
            module: 'DSE-E7 (Software Fault Tolerance)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/software_fault_tolerance?set_language=en&cl=en',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/software_fault_tolerance/summer-semester-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/summer-semester/software_fault_tolerance/summer-semester-2019',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110631004'
        }, {
            name: 'Seminar: Current Topics in Dependable Systems',
            module: 'DSE-E11 (Principles of Dependable Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_dependable_systems?set_language=en&cl=en',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_dependable_systems?set_language=en&cl=en',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110631003'
        },
    ],
    ws2020: [
        {
            name: 'Seminar: Software Fault Tolerance',
            module: 'DSE-E7 (Software Fault Tolerance)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_software_fault_tolerance',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_software_fault_tolerance/winter-semester-2020-21',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_software_fault_tolerance/winter-semester-2019-20',
        }, {
            name: 'Lab: Software Fault Tolerance',
            module: 'DSE-E7 (Software Fault Tolerance)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/software_fault_tolerance_lab',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/software_fault_tolerance_lab/ws20-21',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/software_fault_tolerance_lab/winter-semester-2019-20',
            forum: 'https://auditorium.inf.tu-dresden.de/en/groups/110804212'
        }, {
            name: 'Microkernel-based Operating Systems',
            module: 'DSE-E8 (Microkernel-based Operating Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/mos',
            current: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/mos',
        }, {
            name: 'Application Development for M&U Computing',
            module: 'DSE-E10',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-rechnernetze/studium/lehrveranstaltungen/lehrveranstaltungsdetails?ln=en&lv_id=48',
            current: 'https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/26582941705?0',
        }, {
            name: 'Principles of Dependable Systems',
            module: 'DSE-E11 (Principles of Dependable Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/principles_of_dependable_systems',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/principles_of_dependable_systems/winter-semester-2020',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/lehrveranstaltungen/winter-semester/principles_of_dependable_systems/winter-semester-2019'
        }, {
            name: 'Real-Time Systems [NOT OFFERED]',
            module: 'DSE-E9 (Real-Time Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/rts',
            prev: 'https://tu-dresden.de/ing/informatik/sya/professur-fuer-betriebssysteme/studium/vorlesungen/rts',
        },
    ],
    ss2021: [
        {
            name: 'Seminar: Current Topics in Dependable Systems',
            module: 'DSE-E11 (Principles of Dependable Systems)',
            home: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_dependable_systems',
            current: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_dependable_systems/summer-semester-2021',
            prev: 'https://tu-dresden.de/ing/informatik/sya/se/studium/labs-seminars/seminar_current_topics_in_dependable_systems/summer-semester-2020',
        }
    ]
}


let semesterSelect = document.getElementById("sem-select");
let tablesElement = document.getElementById("tables");
let tables = '';
for (const index in semesters) {
    let option = document.createElement("option");
    option.text = semesters[index].name;
    option.value = semesters[index].id;
    if (semesters[index].select) {
        option.setAttribute('selected', 'selected');
    }
    semesterSelect.add(option);

    const sem_courses = courses[semesters[index].id];
    let rows = '';
    for (r = 0; r < sem_courses.length; r++) {
        const c = sem_courses[r];
        const row = `<div class="Rtable-row ${r % 2 !== 0 ? 'is-striped' : ''}">
    <div class="Rtable-cell name-cell">
        <div class="Rtable-cell--heading">Name</div>
        <div class="Rtable-cell--content date-content">
            <span class="webinar-name">${c.name}</span>
        </div>
    </div>
    <div class="Rtable-cell details-cell">
        <div class="Rtable-cell--content title-content">${c.module}</div>
    </div>
    <div class="Rtable-cell course-page-cell">
        <div class="Rtable-cell--heading">Index</div>
        <div class="Rtable-cell--content access-link-content">
            <a target="_blank"
               href="${c.home}">
                <i class="material-icons">
                    link
                </i>
            </a>
        </div>
    </div>
    <div class="Rtable-cell material-link-cell">
        <div class="Rtable-cell--heading">${semesters[index].current}</div>
        <div class="Rtable-cell--content replay-link-content">
        <a target="_blank"
        href="${c.current ? c.current : '#'}">
         <i class="material-icons">
             ${c.current ? 'folder' : 'error_outline'}
         </i>
     </a>
        </div>
    </div>
    <div class="Rtable-cell material-link-cell">
        <div class="Rtable-cell--heading">${semesters[index].prev}</div>
        <div class="Rtable-cell--content replay-link-content">
            <a target="_blank"
               href="${c.prev ? c.prev : '#'}">
                <i class="material-icons">
                    ${c.prev ? 'folder' : 'error_outline'}
                </i>
            </a>
        </div>
    </div>
    <div class="Rtable-cell Rtable-cell--foot forum-cell">
        <div class="Rtable-cell--heading">Forum</div>
        <div class="Rtable-cell--content pdf-content">
            <a target="_blank" href="${c.forum ? c.forum : '#'}">
                <i class="material-icons">
                    ${c.forum ? 'forum' : 'error_outline'}
                </i>
            </a>
        </div>
    </div>
</div>`
        rows = rows.concat(row);
    }

    const table = `<div id="${semesters[index].id}" class="Rtable Rtable--5cols Rtable--collapse">
    <div class="Rtable-row Rtable-row--head">
        <div class="Rtable-cell name-cell column-heading">Name</div>
        <div class="Rtable-cell details-cell column-heading">Details</div>
        <div class="Rtable-cell course-page-cell column-heading">Index</div>
        <div class="Rtable-cell material-link-cell column-heading">${semesters[index].current}</div>
        <div class="Rtable-cell material-link-cell column-heading">${semesters[index].prev}</div>
        <div class="Rtable-cell forum-cell column-heading">Forum</div>
    </div>
    ${rows}
    </div>
    `
    tables = tables.concat(table);
}

tablesElement.innerHTML = tables;

// Code taken from internet.
let x, i, j, selectElement, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selectElement = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selectElement.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selectElement.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            let y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML === this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        let semEl = document.getElementById("sem-select");
        let sem = semEl.options[semEl.selectedIndex].value;
        // console.log(sem);
        if (sem !== "sem") {
            // document.getElementById(sem)
            for (let index = 0; index < semEl.options.length; index++) {
                const element = semEl.options[index];
                // console.log(sem, element.value);
                if (element.value !== "sem") {
                    if (element.value === sem) {
                        document.getElementById(element.value).style.display = "block";
                    } else {
                        document.getElementById(element.value).style.display = "none";
                    }
                }
            }
        }
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt === y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

let sem = semesterSelect.options[semesterSelect.selectedIndex].value;

if (sem !== "sem") {
    // document.getElementById(sem)
    for (let index = 0; index < semesterSelect.options.length; index++) {
        const element = semesterSelect.options[index];
        // console.log(sem, element.value);
        if (element.value !== "sem") {
            if (element.value === sem) {
                document.getElementById(element.value).style.display = "block";
            } else {
                document.getElementById(element.value).style.display = "none";
            }
        }
    }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
