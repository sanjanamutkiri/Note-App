const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    addEventListeners();
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let note = document.createElement("div");
    note.className = "note";

    let noteTitle = document.createElement("input");
    noteTitle.className = "note-title";
    noteTitle.placeholder = "Title";

    let noteContent = document.createElement("textarea");
    noteContent.className = "note-content";
    noteContent.placeholder = "Write your note here...";

    let noteButtons = document.createElement("div");
    noteButtons.className = "note-buttons";

    let saveBtn = document.createElement("button");
    saveBtn.className = "save";
    saveBtn.innerText = "Save";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    noteButtons.appendChild(saveBtn);
    noteButtons.appendChild(deleteBtn);
    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(noteButtons);
    notesContainer.appendChild(note);

    saveBtn.addEventListener("click", () => {
        updateStorage();
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateStorage();
    });

    updateStorage();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

function addEventListeners() {
    const notes = document.querySelectorAll(".note");
    notes.forEach(note => {
        note.querySelector(".save").addEventListener("click", () => {
            updateStorage();
        });

        note.querySelector("button:not(.save)").addEventListener("click", () => {
            note.remove();
            updateStorage();
        });
    });
}

showNotes();
