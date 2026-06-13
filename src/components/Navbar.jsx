import React from 'react'
import logo from "../assets/logo.png"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex shrink-0 items-center'>
                <a href='/' aria-label='Home'>
                    <img src={logo} className='mx-2' width={100} height={100} alt='Logo' />
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/kaushalkrsna/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/kaushal-krsna'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'>
                    <FaGithub />
                </a>
                <a href='https://leetcode.com/u/kaushalkrsna/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LeetCode'
                    className='text-[#FFA116] hover:text-[#FFB84D] transition-colors'>
                    <SiLeetcode />
                </a>
                <a href='https://x.com/Kaushalkrsna'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Twitter'>
                    <FaSquareXTwitter />
                </a>

            </div>

        </nav>
    )
}

export default Navbar