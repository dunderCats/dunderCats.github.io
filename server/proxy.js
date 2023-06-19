const pool = require("./pool").pool;

const SELECT_MEMBERS = "select * FROM members";
const SELECT_MEMBER = "select * FROM members where member_id = ?";
const SELECT_MEMBER_NAME =
  "SELECT * FROM members WHERE first_name = ? and last_name = ?";
const INSERT_MEMBER =
  "insert into members (first_name, last_name, title, prof_pic) values (?, ?, ?, ?)";
const DELETE_MEMBER = 'DELETE FROM members WHERE member_id = ?';
// const UPDATE_MEMBER_PIC = "UPDATE members SET prof_pic = ? WHERE member_id = ?";

exports.selectMembers = async () => {
  try {
    const [rows] = await pool.query(SELECT_MEMBERS);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

exports.selectMemberById = async (memberId) => {
  try {
    const [rows] = await pool.query(SELECT_MEMBER, [memberId]);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
};

exports.selectMemberByName = async (firstName, lastName) => {
  try {
    const [rows] = await pool.execute(SELECT_MEMBER_NAME, [
      firstName,
      lastName,
    ]);
    return rows;
  } catch (err) {
    console.log(err);
  }
};

exports.insertMember = async (member) => {
  try {
    const [rows] = await pool.execute(INSERT_MEMBER, [
      member.first_name,
      member.last_name,
      member.title,
      member.prof_pic
    ]);
    console.log(rows)
    return { memberId: rows.insertId, ...member };
  } catch (err) {
    console.log(err);
  }
};

exports.deleteMember = async (memberId) =>{
  try{
    const [rows] = await pool.execute(DELETE_MEMBER, [memberId])
    return rows
  }
  catch (err){
    console.log(err)
  }
}

// exports.updateMemberPic = async (pic) => {
//   try {
//     const [rows] = await pool.execute(UPDATE_MEMBER_PIC, [pic.prof_pic]);
//     console.log(rows)
//     return rows.info;
//   } 
//   catch (err) {
//     console.log(err);
//   }
// };
