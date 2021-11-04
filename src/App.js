import './App.css';
import { useEffect, useState } from 'react';

//components
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import DisplayCard from './components/DisplayCard'
import CustomButton from './components/CustomButton';
import Drawer from './components/Drawer'

// material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

//api library
import axios from 'axios'

//toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deal from './components/Deal';

function App() {
  const [deals, setDeals] = useState(null);
  const [ready, setReady] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [maxReached, setMaxReached] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals',
    })
      .then(function (response) {
        const results = response.data['deals']
        setDeals(results)
        setReady(true)
      });

  }, [compareList]);

  const handleClose = () => {
    setShowComparison(false)
  };

  const dealExists = (deal_id) => {
    return compareList.some(function (el) {
      return el.deal_id === deal_id;
    });
  }
  const maxLimit = () => {
    setMaxReached(true)
    toast.warning('Please remove a deal before selecting a new one!')
  }

  const compareDeal = (deal) => {
    if (dealExists(deal['deal_id'])) {
      toast.error('You have already added this deal!')
    }
    else {
      compareList.length > 1 ? maxLimit() : setCompareList((prev) => [...prev, deal])
    }
  }


  if (ready) {
    return (
      <Grid
        justifyContent="center"
        container spacing={3}
        style={{ marginBottom: 130 }}
      >
        <Header />
        <Grid
          container
          direction="row"
          justifyContent="center"
          item xs={12}
        >
          {compareList.length === 2 ? <CustomButton color={'green'} label={'Compare deals'} action={() => setShowComparison(true)} /> : null}
        </Grid>
        {deals.map((deal) =>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item xs={12}
          >
            <DisplayCard deal={deal} />
            <CustomButton color={'blue'} label={'Add to compare'} action={() => compareDeal(deal)} />
          </Grid>
        )}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item xs={12}>
        </Grid>
        <Drawer compareList={compareList} setCompareList={setCompareList} maxReached={maxReached} setMaxReached={setMaxReached} />
        <Dialog
          open={showComparison}
          onClose={handleClose}
        >
          <DialogTitle >
            Comparison
          </DialogTitle>
          <DialogContent>
            {compareList.map((deal) =>
              <Deal deal={deal} />
            )}
          </DialogContent>
          <Button onClick={() => {
            handleClose();
          }} autoFocus>
            Close
          </Button>
        </Dialog>
        <Footer />
        <ToastContainer />
      </Grid >
    );
  }
  else {
    return (
      <Grid
        justifyContent="center"
        container spacing={3}>
        <Header />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item xs={12}
        >
          Deals Loading...
        </Grid>
        <Footer />
      </Grid >
    );
  }
}

export default App;
