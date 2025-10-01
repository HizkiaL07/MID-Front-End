import React, { useState } from "react";

// ------------------ Types ------------------
type Student = {
  id: number;
  name: string;
  major: string;
  gpa: number;
};

// ------------------ StudentCard ------------------
type StudentCardProps = {
  student: Student;
  children?: React.ReactNode;
};

const StudentCard = ({ student, children }: StudentCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow mb-3">
      <h2 className="font-bold text-lg">{student.name}</h2>
      <p>Jurusan: {student.major}</p>
      <p>GPA: {student.gpa}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

// ------------------ Filter ------------------
type FilterProps = {
  majors: string[];
  selectedMajor: string;
  onChange: (major: string) => void;
};

const Filter = ({ majors, selectedMajor, onChange }: FilterProps) => {
  return (
    <select
      value={selectedMajor}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Semua Jurusan</option>
      {majors.map((major) => (
        <option key={major} value={major}>
          {major}
        </option>
      ))}
    </select>
  );
};

// ------------------ App ------------------
const App = () => {
  const [selectedMajor, setSelectedMajor] = useState("");

  const students: Student[] = [
    { id: 1, name: "Hizkia", major: "Informatika", gpa: 4.0 },
    { id: 2, name: "Alfonso", major: "Manajemen", gpa: 3.2 },
    { id: 3, name: "Memet", major: "Informatika", gpa: 3.6 },
    { id: 4, name: "Mario", major: "Akuntansi", gpa: 3.4 },
  ];

  // Ambil semua jurusan unik
  const majors = Array.from(new Set(students.map((s) => s.major)));

  // Filter mahasiswa berdasarkan jurusan
  const filteredStudents = selectedMajor
    ? students.filter((s) => s.major === selectedMajor)
    : students;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manajemen Mahasiswa</h1>

      <Filter
        majors={majors}
        selectedMajor={selectedMajor}
        onChange={setSelectedMajor}
      />

      <div className="mt-4">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student}>
            {student.gpa > 3.5 && (
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded">
                Cum Laude
              </span>
            )}
          </StudentCard>
        ))}
      </div>
    </div>
  );
};

export default App;
