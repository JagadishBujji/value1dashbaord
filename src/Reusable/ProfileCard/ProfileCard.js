import { useState } from 'react';
// import t from '../../../public/user.png';

const ProfileCard = () => {
  const [profileImage, setProfileIamge] = useState({
    file: null,
    imagePreviewUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  });

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setProfileIamge({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
          <img htmlFor="photo-upload" className="profileCardimage" src={profileImage.imagePreviewUrl} alt="" />
        </div>
        <input id="photo-upload" type="file" onChange={photoUpload} />
      </label>
    </>
  );
};
export default ProfileCard;
