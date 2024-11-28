import EmployeeList from '@/components/employeesData'
//import { User } from '@nextui-org/react'
import React from 'react'

const page = async() => {

//const employeesData = await User.find();

  return (
    <div>
      <EmployeeList/>
    </div>
  )
}

export default page