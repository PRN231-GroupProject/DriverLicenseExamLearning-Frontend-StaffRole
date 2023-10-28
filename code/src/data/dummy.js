import { IoIosCar } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { TbMessage2Question, TbUserCheck } from "react-icons/tb";
import { MdQuiz, MdGolfCourse } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import { LuUserCheck } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";



    export const links = [
        {
          title: 'Human Resource',
          links: [
            {
              name: 'Member',
              icon: <BsPersonFill />,
            },
            {
                name: 'Mentor',
                icon: <BsPersonFill />,
            },
          ],
        },
        {
            title: 'Manager',
            links: [
              {
                name: 'Car',
                icon: <IoIosCar />,
              },
              {
                name: 'Package',
                icon: <LuPackageCheck/> 
              }
            ],
          },
          {
            title: 'Content Manager',
            links: [
              {
                name: 'Quiz',
                icon: <MdQuiz />,
              },
              {
                  name: 'QuestionBank',
                  icon: <TbMessage2Question />,
              },
            ],
          },
          {
            title: 'Application',
            links: [
              {
                name: 'LicenseApplication',
                icon: <LuUserCheck />,
              },
              {
                  name: 'MentorApplication',
                  icon: <TbUserCheck />,
              },
            ],
          },

      
      
      ];



    
     export const dataFetching = [
        {
            title: 'Human Resource',
            links: [
                {
                    name: 'Member',
                    icon: <BsPersonFill />,
                },
                {
                    name: 'Mentor',
                    icon: <BsPersonFill />,
                },
            ],
        },

        {
            title: 'Manager',
            links: [
                {
                    name: 'Car',
                    icon: <IoIosCar />,
                },

            ],

        },
        {
            title: 'Content Manager',
            links: [
                {
                    name: 'Quiz',
                    icon: <MdQuiz />,
                },
                {
                    name: 'QuestionBank',
                    icon: <TbMessage2Question />,
                },
                {
                    name: 'Package',
                    icon: <MdGolfCourse />,
                },
                {
                    name: 'License Type',
                    icon: <VscTypeHierarchy />,
                },

            ],
        },
        {
            'title': 'Application',
            link: [
                {
                    name: 'License Application',
                    icon: <LuUserCheck />
                },
                {
                    name: 'Mentor Accepted Application',
                    icon: <TbUserCheck />
                }

            ],
        },

    ]