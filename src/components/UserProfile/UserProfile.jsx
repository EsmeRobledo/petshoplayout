import React from 'react'
import {ProfileContainer, ProfileWrapper, ProfileContent, 
    ImageContainer, ImageProfile, BtnContainer, BtnEdit,
    BtnElim, PersonalInfoContainer,Form, InfoH2, LabelText, FormInput, BtnPassword, AddressContainer} from './UserProfileElements'
import maleavatar from '../../images/undraw_male_avatar_323b.svg'
import femaleavatar from '../../images/undraw_female_avatar_w3jk.svg'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useState } from 'react';
import {editUserService} from '../../Services'


const UserProfile = ( {userProfileData}) =>{
  
  const image = maleavatar
  
  
    return(
        <>
            <ProfileContainer>
                <ProfileWrapper>
                    <ProfileContent>
                        <ImageContainer>
                            <ImageProfile src={image}></ImageProfile>
                        </ImageContainer>
                        <BtnContainer>
                                <BtnEdit>Edit Profile</BtnEdit>
                                <BtnElim>Eliminate Profile</BtnElim>
                        </BtnContainer>
                        
                            <Form>
                            <PersonalInfoContainer>
                            <InfoH2>Personal Information</InfoH2>
                                 <LabelText>Name:</LabelText><FormInput type='text' required value={userProfileData.firstname} name="firstname" />
                                 <LabelText>LastName:</LabelText> <FormInput type='text' required value={userProfileData.lastname} name="lastname" />
                                 <LabelText>Phone:</LabelText> <FormInput type='text' required value={userProfileData.phone} name="phone" />
                                 <LabelText>Email:</LabelText>  <FormInput type='text' required value={userProfileData.mail} name="mail" />
                                 <BtnPassword>ModifyPassword</BtnPassword> 
                        </PersonalInfoContainer>
                        <AddressContainer>
                                <InfoH2>Personal Adress</InfoH2>
                                 <LabelText>Calle y Numero:</LabelText> <FormInput type='text' required value={userProfileData.street} name="firstname" />      
                                 <LabelText>Ciudad:</LabelText>  <FormInput type='text' required value={userProfileData.city} name="firstname" /> 
                                 <LabelText>Estado:</LabelText> <FormInput type='text' required value={userProfileData.state} name="firstname" />  
                                 <LabelText>C.P:</LabelText>  <FormInput type='text' required value={userProfileData.PC} name="firstname" /> 
                        </AddressContainer>
                            </Form>
                    </ProfileContent>
                </ProfileWrapper>
            </ProfileContainer>
        </>
    )
}

export default UserProfile;