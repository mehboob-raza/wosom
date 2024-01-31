import { Box, Button } from '@mui/material'

const AdvanceSettingsBtn = (props: unknow) => {
  const { onClick } = props
  return (
    <Box sx={{
      borderRadius: '0px 2px 0px 0px',
      borderTop: '1px solid #ECECEC',
      borderBottom: '1px solid #ECECEC',
      background: '#FFF',
      mt: 1,
      display: 'flex',
      justifyContent: 'center'
    }} >
      <Button onClick={onClick} sx={{
        color: '#000',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#fff'
        }
      }}>
        Advance Settings
      </Button>
    </Box>
  )
}

export default AdvanceSettingsBtn