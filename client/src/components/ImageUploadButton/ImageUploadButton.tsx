import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useState } from 'react';
import useStyles from './useStyles';
import { Box, Button, Card, Typography, Avatar, CardActions, Input, FormLabel } from '@material-ui/core';
import formDataAPI from '../../helpers/APICalls/formDataAPI';

const ImageUploadButton = () => {
  const classes = useStyles();
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState(' Upload a file device!!!!');
  const [uploadedFile, setUploadedFile] = useState({});
  const [isInputClicked, setIsInputClicked] = useState(false);
  const { loggedInUser } = useAuth();
  const [avatarImage, setAvatarImage] = useState('../../Images/demoUser2.png');
  //const [avatarImage, setAvatarImage] = useState(`https://robohash.org/test.png`);
  // const [avatarImage, setAvatarImage] = useState(
  //    'https://kanban-board-bucket2.s3.us-east-2.amazonaws.com/images/6908eb19-aee1-4a68-a003-17ef9b16c9c8.png',
  //  );

  const onInputChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(`Upload ${e.target.files[0].name}`);
    setIsInputClicked(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await formDataAPI(file);
      //setUploadedFile({ fileName, fileLocation });
      //setAvatarImage(fileLocation);
      setIsInputClicked(false);
    } catch (err) {
      setFilename(`Failed to upload image!`);
    }
  };

  return (
    <Box className={classes.root}>
      <Card className={classes.avatarContainer}>
        <Avatar alt="Profile Image" src={avatarImage} className={classes.photoAvatar} variant="circle" />
        <CardActions>
          <form action="/" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            {!isInputClicked && (
              <FormLabel htmlFor="imageUpload" className={classes.photoLabel}>
                <Input fullWidth type="file" id="imageUpload" onChange={onInputChange} className={classes.photoInput} />
                Upload a image
              </FormLabel>
            )}
            {isInputClicked && (
              <Button type="submit" variant="outlined" fullWidth className={classes.photoButton}>
                {filename}
              </Button>
            )}
          </form>
        </CardActions>
      </Card>
    </Box>
  );
};
export default ImageUploadButton;
