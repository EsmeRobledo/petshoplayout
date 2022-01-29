import React, {useState, useEffect} from 'react'
import {ProfileContainer, ProfileWrapper, ProfileContent, 
    ImageContainer, ImageProfile, BtnContainer, BtnEdit,
    BtnElim, PersonalInfoContainer,Form, InfoH2, LabelText, FormInput, BtnPassword, AddressContainer} from './UserProfileElements'
import maleavatar from '../../images/undraw_male_avatar_323b.svg'
import femaleavatar from '../../images/undraw_female_avatar_w3jk.svg'
import {getUserProfile} from '../../Services'


const UserProfile = () =>{
   const [user, setUser] = useState([]);
  
   const getUserInfo = async () =>{
        const id = localStorage.getItem('iduser');
            const user = await getUserProfile(id)
            setUser(user)
            console.log("user  "+ user)
            return user;  
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
                                <BtnEdit>Edit Profile</BtnEdit>
                                <BtnElim>Eliminate Profile</BtnElim>
                                <BtnPassword>ModifyPassword</BtnPassword> 
                        </BtnContainer>
                    </ProfileContent>
                    <Form>
                        <PersonalInfoContainer>
                            <InfoH2>Personal Information</InfoH2>
                                 <LabelText>Name:</LabelText><FormInput type='text' required name="firstname" />
                                 <LabelText>LastName:</LabelText> <FormInput type='text' required  name="lastname" />
                                 <LabelText>Phone:</LabelText> <FormInput type='text' required  name="phone" />
                                 <LabelText>Email:</LabelText>  <FormInput type='text' required  name="mail" />
                        </PersonalInfoContainer>
                        <PersonalInfoContainer>
                        <InfoH2>Address</InfoH2>
                                 <LabelText>Calle y Numero:</LabelText> <FormInput type='text' required  name="firstname" />      
                                 <LabelText>Ciudad:</LabelText>  <FormInput type='text' required  name="firstname" /> 
                                 <LabelText>Estado:</LabelText> <FormInput type='text' required  name="firstname" />  
                                 <LabelText>C.P:</LabelText>  <FormInput type='text' required  name="firstname" /> 
                        </PersonalInfoContainer>
                    </Form>
                   
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default UserProfile;