import React from 'react'
import './AboutPage.scss'

export const AboutPage = () => {
  return (
    
    <div className='AboutPage'> 
      <h1 >About DirectoryDice</h1>
      <p>Directory Dice is a versatile and user-friendly application designed to simplify the process of creating and managing organization directories or class rosters. </p>
      
      <ul>
      <ul className='ul1'>Why use DirectoryDice?</ul>
        <li>
          Intuitive interface and powerful features that allow for effortless creation, updating, and navigating of member database
        </li>
        <li>
          Easily create and customize directory by adding member names',title, and profile picture
        </li>
        <li>
          Users can add, edit, and update existing members or removed outdated members with a few clicks! 
        </li>
        <li>
          Random select feature: offers unique funcitonality to randomly select users or groups for activities like raffles, choosing teams, or assigning tasks
        </li>
        <li>
          Profile search is powerful search engine that allows user to quickly find specific members within the directory 
        </li>
        <li>
          User-friendly interface allows for seamless navigation and interaction with application
        </li>
        <li>
         Data security: we prioritize confidentiality and security of YOUR data and utilize robust encryption methods to protect sensitive information and allow for data backup/restoration
        </li>
      </ul>
      <p>Whether you are a teacher, event planner, or manager running a company, DirectoryDice simplifies process of creating and managing an interactive roster that brings convenience, efficiency, and fun! </p>
       </div>
  )
}
