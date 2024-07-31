import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface ComplaintsState {
    complaints: any[];
    imageComplaints:any[],

  }
const initialState:ComplaintsState = {
   imageComplaints:[],
   complaints : [
    {
      title: "Garbage Collection",
      date: '7-04-22',
      status: 'Closed',
      description: 'Routine garbage collection for residential areas. All bins were emptied successfully.',
      name: 'Rajesh Kumar',
      mobile_number: '9876543210',
      email: 'rajeshkumar@example.com',
      location: 'Connaught Place',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Recycling Collection",
      date: '7-04-22',
      status: 'Open',
      description: 'Recycling collection for plastic and paper materials. Residents are requested to separate their recyclables.',
      name: 'Priya Sharma',
      mobile_number: '9876543211',
      email: 'priyasharma@example.com',
      location: 'Hauz Khas',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Green Waste Collection",
      date: '8-04-22',
      status: 'Scheduled',
      description: 'Collection of green waste such as garden clippings and leaves. Please place waste in designated bins.',
      name: 'Amit Patel',
      mobile_number: '9876543212',
      email: 'amitpatel@example.com',
      location: 'South Extension',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: '10-04-22'
    },
    {
      title: "Bulky Waste Collection",
      date: '9-04-22',
      status: 'Closed',
      description: 'Collection of large items such as furniture and appliances. Ensure items are left at curbside for pickup.',
      name: 'Sunita Reddy',
      mobile_number: '9876543213',
      email: 'sunitareddy@example.com',
      location: 'Vasant Kunj',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Hazardous Waste Collection",
      date: '10-04-22',
      status: 'Open',
      description: 'Special collection for hazardous materials such as batteries and chemicals. Drop-off points are available.',
      name: 'Arjun Gupta',
      mobile_number: '9876543214',
      email: 'arjungupta@example.com',
      location: 'Greater Kailash',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "E-Waste Collection",
      date: '11-04-22',
      status: 'Completed',
      description: 'Collection of electronic waste including old computers and phones. Please bring items to designated collection centers.',
      name: 'Neha Singh',
      mobile_number: '9876543215',
      email: 'nehasingh@example.com',
      location: 'Rajouri Garden',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Food Waste Collection",
      date: '12-04-22',
      status: 'Closed',
      description: 'Collection of food waste for composting. Please use compostable bags and ensure food waste is free of non-organic materials.',
      name: 'Vikram Mehta',
      mobile_number: '9876543216',
      email: 'vikramehta@example.com',
      location: 'Karol Bagh',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Bulk Yard Sale Waste",
      date: '13-04-22',
      status: 'Open',
      description: 'Collection of waste from yard sales. Ensure items are properly sorted for disposal.',
      name: 'Aisha Khan',
      mobile_number: '9876543217',
      email: 'aishakhan@example.com',
      location: 'Paharganj',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    },
    {
      title: "Construction Debris Collection",
      date: '14-04-22',
      status: 'Scheduled',
      description: 'Collection of construction debris including wood and metal scraps. Please separate materials as per guidelines.',
      name: 'Ravi Desai',
      mobile_number: '9876543218',
      email: 'ravidesai@example.com',
      location: 'Chandni Chowk',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: '16-04-22'
    },
    {
      title: "Seasonal Cleanup",
      date: '15-04-22',
      status: 'Completed',
      description: 'Seasonal cleanup event focusing on public parks and streets. Volunteers are welcome to assist.',
      name: 'Meera Nair',
      mobile_number: '9876543219',
      email: 'meeranair@example.com',
      location: 'Dwarka',
      image_uri: 'https://www.shutterstock.com/shutterstock/photos/1969933057/display_1500/stock-photo-jamshedpur-jharkhand-india-march-toilet-for-public-use-sulabh-toilet-complex-under-1969933057.jpg',
      scheduled_date: null
    }
]



};


export const complaintsSlice = createSlice({
    name: "complaintsSlice",
    initialState,
    reducers: {
        addComplaints: (state, action) => {
            state.complaints = [...state.complaints , action.payload];
          },
          addImageAndComplaints: (state, action) => {
            state.imageComplaints = [...state.imageComplaints , action.payload];
          },
          editComplaints: (state, action) => {
            const { index, updatedData } = action.payload;
            state.complaints[index] = updatedData;
        },
        
       
    },
});

export const { addComplaints ,addImageAndComplaints,editComplaints} = complaintsSlice.actions;
export default complaintsSlice.reducer;