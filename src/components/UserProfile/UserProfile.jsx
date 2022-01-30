import React, {useState, useEffect, useContext} from 'react'
import {ProfileContainer, ProfileWrapper, ProfileContent, 
    ImageContainer, ImageProfile, BtnContainer, BtnEdit,
    BtnElim, PersonalInfoContainer,BtnAccept, Form,FormPass, InfoH2, PassWrapper, LabelText,FormInput, BtnPassword} from './UserProfileElements'
import maleavatar from '../../images/undraw_male_avatar_323b.svg'
import femaleavatar from '../../images/undraw_female_avatar_w3jk.svg'
import {getUserProfile, deleteProfile, editUserService, editPassword} from '../../Services'
import { UserContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'


const UserProfile = () =>{
   const {clearToken} = useContext(UserContext);
   const [user, setUser] = useState([]);
   const [edit, setEdit] = useState(false)
   const [password, setPassword] = useState("") 
   const [modPass, setModPass] = useState(false)
   const [newPass, setNewPass] = useState("")

   const updateVal = async () =>{
       console.log("user value",  user)
        const resp = await editUserService(user);
        console.log(resp);
        alert('Your user have been updated')
        setUser(resp.detail)
        setEdit(!edit)
    }

   const onSubmit = (e) => {
    e.preventDefault();
    if(edit){
        updateVal()
    }
    if(modPass){
        editPassword(password, newPass)
    }
      
    }
   const getUserInfo = async () =>{
            const resp = await getUserProfile();
            setUser(resp.detail)
            return null;  
        }
       
   const onDelete = async () =>{
       if(window.confirm('If you delete your profile you will not longer be able to see your lastest orders and you will need to create a new accont to buy with us')){
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
   const passwordOnckick =() =>{
        setModPass(true)
   }
   const handleOnChange = (e) => {
    if(edit){
        setUser({...user,
            [e.target.name]: e.target.value || ""
        })
    }
    if(modPass){
        setPassword({[e.target.name]: e.target.value || ""})
        setNewPass({[e.target.name]: e.target.value || ""})
    }
    
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
                                <BtnPassword variant="warning" onClick={() => passwordOnckick()}>ModifyPassword</BtnPassword> 
                        </BtnContainer>
                    </ProfileContent>
                    <Form onSubmit={onSubmit}>
                        <PersonalInfoContainer>
                            <InfoH2>Personal Information</InfoH2>
                                 <LabelText>Name:</LabelText><FormInput type='text' value={user.firstname} required name="firstname" disabled={!edit} onChange={handleOnChange} />
                                 <LabelText>LastName:</LabelText> <FormInput type='text' value={user.lastname} required  name="lastname" disabled={!edit} onChange={handleOnChange} />
                                 <LabelText>Phone:</LabelText> <FormInput type='text' value={user.phone} required  name="phone" disabled={!edit} onChange={handleOnChange} />
                                 <LabelText>Email:</LabelText>  <FormInput type='text' value={user.mail} required  name="mail" disabled={!edit} onChange={handleOnChange} />
                        </PersonalInfoContainer>
                        <PersonalInfoContainer>
                        <InfoH2>Address</InfoH2>
                                 <LabelText>Street:</LabelText> <FormInput type='text' required value={user.Street}  name="Street" disabled={!edit} onChange={handleOnChange} />      
                                 <LabelText>City:</LabelText>  <FormInput type='text' required value={user.City}  name="City" disabled={!edit} onChange={handleOnChange} /> 
                                 <LabelText>State:</LabelText> <FormInput type='text' required value={user.State} name="State" disabled={!edit} onChange={handleOnChange} />  
                                 <LabelText>P.C:</LabelText>  <FormInput type='text' required value={user.PC} name="PC" disabled={!edit}  onChange={handleOnChange}/> 
                        </PersonalInfoContainer>
                        {edit? <BtnContainer> <BtnAccept disabled={!edit}  type='submit'>Save</BtnAccept></BtnContainer> : null}
                       
                    </Form>
                  {modPass ?
                  <PassWrapper>
                      <FormPass onSubmit={onSubmit}>
                           <LabelText>old Password:</LabelText> <FormInput type='text' required value="" name="password" onChange={handleOnChange} />      
                           <LabelText>New Password:</LabelText>  <FormInput type='text' required value=""  name="newPass" onChange={handleOnChange} />
                           <BtnContainer> <BtnAccept type='submit'>Save</BtnAccept></BtnContainer> 
                      </FormPass>
                  </PassWrapper>
                  : null}
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default UserProfile;