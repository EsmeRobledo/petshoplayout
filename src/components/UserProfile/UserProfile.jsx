import React, {useState, useEffect, useContext} from 'react'
import {ProfileContainer, ProfileWrapper, ProfileContent, 
    ImageContainer, ImageProfile, BtnContainer, BtnEdit,
    BtnElim, PersonalInfoContainer,BtnAccept, Form, InfoH2, LabelText,LabelTextValue, FormInput, BtnPassword} from './UserProfileElements'
import maleavatar from '../../images/undraw_male_avatar_323b.svg'
import femaleavatar from '../../images/undraw_female_avatar_w3jk.svg'
import {getUserProfile, deleteProfile, editUserService} from '../../Services'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'


const UserProfile = () =>{
   const {clearToken} = useContext(UserContext);
   const [user, setUser] = useState([]);
   const [edit, setEdit] = useState(false)

   const updateVal = async () =>{
        const resp = await editUserService();
        alert('Your user have been updated')
        setUser(resp)
        setEdit(false)
    }

   const onSubmit = (e) => {
    e.preventDefault();
      updateVal()
    }
   const getUserInfo = async () =>{
            const resp = await getUserProfile();
            setUser(resp.detail)
            console.log(user)
            return null;  
        }
       
   const onDelete = async () =>{
       if(window.confirm('If you delete your profile you will not longer be able to see your lastes orders and you will need to create a new accont to buy with us')){
        const resp = await deleteProfile();
        clearToken();
        alert('This profile is not longer available')
       }
       return (
        <Navigate to='/'/>
       )

   }
   const editOnckick = () =>{
    setEdit(true)
    
   }
     const handleOnChange =(e) =>{
        setUser(e.target.value)
     }

     useEffect(() =>{
        getUserInfo()
       }, [])
    return(
        <>
            <ProfileContainer>
                <ProfileWrapper>
                    <ProfileContent>
                        <ImageContainer>
                            <ImageProfile src={maleavatar}></ImageProfile>
                        </ImageContainer>
                        <BtnContainer>
                                <BtnEdit variant="warning" onClick={() => editOnckick()}>Edit Profile</BtnEdit>
                                <BtnElim variant="warning" onClick={() => onDelete()}>Eliminate Profile</BtnElim>
                                <BtnPassword>ModifyPassword</BtnPassword> 
                        </BtnContainer>
                    </ProfileContent>
                    {edit?
                    <Form onSubmit={onSubmit}>
                        <PersonalInfoContainer>
                            <InfoH2>Personal Information</InfoH2>
                                 <LabelText>Name:</LabelText><FormInput type='text' value={user.firstname} required name="firstname" onChange={handleOnChange} />
                                 <LabelText>LastName:</LabelText> <FormInput type='text' value={user.lastname} required  name="lastname" onChange={handleOnChange} />
                                 <LabelText>Phone:</LabelText> <FormInput type='text' value={user.phone} required  name="phone" onChange={handleOnChange} />
                                 <LabelText>Email:</LabelText>  <FormInput type='text' value={user.mail} required  name="mail" onChange={handleOnChange} />
                        </PersonalInfoContainer>
                        <PersonalInfoContainer>
                        <InfoH2>Address</InfoH2>
                                 <LabelText>Street:</LabelText> <FormInput type='text' required value={user.Street}  name="Street" onChange={handleOnChange} />      
                                 <LabelText>City:</LabelText>  <FormInput type='text' required value={user.City}  name="City" onChange={handleOnChange} /> 
                                 <LabelText>State:</LabelText> <FormInput type='text' required value={user.State} name="State" onChange={handleOnChange} />  
                                 <LabelText>P.C:</LabelText>  <FormInput type='text' required value={user.PC} name="PC"  onChange={handleOnChange}/> 
                        </PersonalInfoContainer>
                        <BtnAccept type='submit' >Save</BtnAccept>
                    </Form>
                   :
                   <Form onSubmit={onSubmit}>
                   <PersonalInfoContainer>
                       <InfoH2>Personal Information</InfoH2>
                            <LabelText>Name:</LabelText><LabelTextValue type='text' name="firstname" >{user.firstname}</LabelTextValue>
                            <LabelText>LastName:</LabelText><LabelTextValue type='text' name="lastname" >{user.lastname}</LabelTextValue>
                            <LabelText>Phone:</LabelText><LabelTextValue type='text'    name="phone" >{user.phone}</LabelTextValue>
                            <LabelText>Email:</LabelText><LabelTextValue type='text'   name="mail" >{user.mail}</LabelTextValue>
                    </PersonalInfoContainer>
                    <PersonalInfoContainer>
                    <InfoH2>Address</InfoH2>
                            <LabelText>Street:</LabelText> <LabelTextValue type='text'  name="Street" >{user.Street}</LabelTextValue>      
                            <LabelText>City:</LabelText><LabelTextValue type='text'  name="City" >{user.City}</LabelTextValue>
                            <LabelText>State:</LabelText> <LabelTextValue type='text' name="State" >{user.State} </LabelTextValue> 
                            <LabelText>P.C:</LabelText> <LabelTextValue type='text' name="PC" >{user.PC}</LabelTextValue>
                    </PersonalInfoContainer>
                    </Form>
                     }
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default UserProfile;