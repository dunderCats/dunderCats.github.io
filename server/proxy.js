const pool = require('./pool').pool

const SELECT_MEMBERS = "select * FROM members"
const SELECT_MEMBER = "select * FROM members where member_id = ?"
const SELECT_MEMBER_NAME = "SELECT * FROM members WHERE first_name = ? and last_name = ?"
const INSERT_MEMBER = "insert into members (first_name, last_name, title, prof_pic) values (?, ?, ?, ?)"

exports.selectMembers = async () => {
    try { 
        const [rows] = await pool.query(SELECT_MEMBERS)
        return rows
    }
    catch (err) {
        console.log(err)
    } 
}

exports.selectMemberById = async (memberId) => {
    try {
        const [rows] = await pool.query(SELECT_MEMBER, [memberId])
        return rows[0] 
    }
    catch (err) {
        console.log(err)
    }
}

exports.selectMemberByName = async (name) => {
    try { 
        const [rows] = await pool.execute(SELECT_MEMBER_NAME, [name])
        return rows
    }
    catch (err) {
        console.log(err)
    }
}

exports.insertMember = async (member) => {
    try {
        const [rows] = await pool.execute(INSERT_MEMBER, [member.first_name, member.last_name, member.title, member.prof_pic])
        return { member_id: rows.insertId, ...member }
    }
    catch(err) {
        console.log(err)
    }
}

