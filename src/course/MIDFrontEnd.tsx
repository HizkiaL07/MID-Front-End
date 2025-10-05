import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ------------------ Types ------------------
type Student = {
  id: number;
  name: string;
  major: string;
  gpa: number;
};

type StudentCardProps = {
  student: Student;
  children?: React.ReactNode;
};

// ------------------ StudentCard ------------------
const StudentCard = ({ student, children }: StudentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.04 }}
      className="p-6 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-indigo-300 transition-all duration-300"
    >
      <h2 className="font-extrabold text-xl text-indigo-800 mb-2">
        {student.name}
      </h2>
      <p className="text-gray-600">🎓 {student.major}</p>
      <p className="text-gray-600">📊 GPA: {student.gpa}</p>
      {children && <div className="mt-4 flex flex-wrap gap-2">{children}</div>}
    </motion.div>
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
      className="border p-3 rounded-2xl shadow-sm bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
    >
      <option value="">📚 Semua Jurusan</option>
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
  const [searchQuery, setSearchQuery] = useState("");

  const students: Student[] = [
    { id: 1, name: "Lumenta, Hizkia", major: "Informatika", gpa: 4.0 },
    { id: 2, name: "Rantung, Chelsea", major: "Informatika", gpa: 3.7 },
    { id: 3, name: "Resilooy, Alfonso", major: "Informatika", gpa: 3.5 },
    { id: 4, name: "Hardiyanti, Niha", major: "Akuntansi", gpa: 3.8 },
    { id: 5, name: "Devina, Mowendu", major: "Akuntansi", gpa: 4.0 },
    { id: 6, name: "Sondakh, Anastacia", major: "Informatika", gpa: 4.0 },
    { id: 7, name: "Parengkuan, Avriel", major: "Informatika", gpa: 3.8 },
    { id: 8, name: "Kussoy, Mikha", major: "Informatika", gpa: 3.8 },
    { id: 9, name: "Raturandang, Daniel", major: "Informatika", gpa: 3.7 },
    { id: 10, name: "Loing, Christian", major: "Informatika", gpa: 3.8 },
    { id: 11, name: "Sahetapy, Vanessa", major: "Informatika", gpa: 4.0 },
    { id: 12, name: "Gazali, Kesi", major: "Akuntansi", gpa: 3.7 },
    { id: 13, name: "Mahadun, Vanda", major: "Akuntansi", gpa: 3.8 },
    { id: 14, name: "Wungkana, Wulan", major: "Manajemen", gpa: 3.6 },
    { id: 15, name: "Selah, Cintadya", major: "Manajemen", gpa: 3.7 },
    { id: 16, name: "Mandry, Svetlana", major: "AirPro", gpa: 3.9 },
    { id: 17, name: "Makalew, Hikaru", major: "AirPro", gpa: 3.5 },
    { id: 18, name: "Widayat, Moses", major: "Manajemen", gpa: 3.4 },
    { id: 19, name: "Tintingon, Nicholien", major: "Akuntansi", gpa: 3.3 },
    { id: 20, name: "Rumampuk, Cantika", major: "Akuntansi", gpa: 3.2 },
    { id: 21, name: "Kansil, Chelsea", major: "Akuntansi", gpa: 3.5 },
    { id: 22, name: "Tapahing, Chelsea", major: "Manajemen", gpa: 3.5 },
  ];

  const majors = Array.from(new Set(students.map((s) => s.major)));

  const filteredStudents = students.filter((s) => {
    const matchMajor = selectedMajor ? s.major === selectedMajor : true;
    const matchName = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchMajor && matchName;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 p-6">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-indigo-800 drop-shadow-lg flex items-center justify-center gap-3">
        🎓 Manajemen Mahasiswa
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="🔍 Cari nama mahasiswa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-3 pl-10 rounded-2xl shadow-sm w-full bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
            >
              ✖
            </button>
          )}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            🔍
          </span>
        </div>
        <Filter
          majors={majors}
          selectedMajor={selectedMajor}
          onChange={setSelectedMajor}
        />
      </div>

      {/* Grid cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        <AnimatePresence>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student}>
                {student.gpa === 4.0 && (
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900 rounded-full shadow-md">
                    🌟 Top Student
                  </span>
                )}
                {student.gpa >= 3.7 && student.gpa < 4.0 && (
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-green-300 to-green-500 text-green-900 rounded-full shadow-md">
                    🎓 Cum Laude
                  </span>
                )}
                {student.gpa >= 3.0 && student.gpa < 3.7 && (
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-blue-900 rounded-full shadow-md">
                    📘 Regular
                  </span>
                )}
                {student.gpa < 3.0 && (
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-red-300 to-red-500 text-red-900 rounded-full shadow-md">
                    ⚠ Warning
                  </span>
                )}
              </StudentCard>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              🚫 Tidak ada mahasiswa ditemukan.
            </p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
