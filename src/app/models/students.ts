
export interface employee{
   empId: number;
    empName: string;
    designation: string;
    department: string;
    salary: number;
    isPermanent: boolean;
    email: string;
    contact: number;
}

export interface student{
    rollNo: number;
    name: string;
    course: string;
    year: string;
    percentage: number;
    isPassed: boolean;
    email: string;
    contact: number;
}

export interface product{
    prodId: number;
    prodName: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    brand: string;
}

export interface course{
    courseId: number;
    courseName: string;
    duration: string;
    fees: number;
    mode: string;
    isActive: boolean;
    trainer: string;
}

export interface book{
    bookId: number;
    title: string;
    author: string;
    price: number;
    pages: number;
    isAvailable: boolean;
    genre: string;
}

export interface customer {
      custId: number;
    name: string;
    city: string;
    age: number;
    email: string;
    isPrime: boolean;
    contact: number;
}

export interface order {
    orderId: number;
    customerName: string;
    product: string;
    amount: number;
    status: string;
    date: string;
}


export interface movie  {
    movieId: number;
    title: string;
    genre: string;
    rating: number;
    releaseYear: number;
    isHit: boolean;
    language: string;
}

export interface teacher  {
    teacherId: number;
    name: string;
    subject: string;
    experience: number;
    salary: number;
    isFullTime: boolean;
    email: string;
}

export interface vehicle  {
    vehicleId: number;
    brand: string;
    model: string;
    type: string;
    price: number;
    isAvailable: boolean;
    fuel: string;
}
export interface hotel  {
    hotelId: number;
    name: string;
    city: string;
    rating: number;
    pricePerNight: number;
    isAvailable: boolean;
    rooms: number;
    contact: number;
}

export interface dcotor  {
    doctorId: number;
    name: string;
    specialization: string;
    experience: number;
    fees: number;
    isAvailable: boolean;
    hospital: string;
    email: string;
}

export interface restaurat  {
    restId: number;
    name: string;
    cuisine: string;
    city: string;
    rating: number;
    avgCost: number;
    isOpen: boolean;
    isVeg: boolean;
}

export interface account  {
    accNo: number;
    holderName: string;
    bank: string;
    accType: string;
    balance: number;
    isActive: boolean;
    branch: string;
}

export interface flight {
    flightId: string;
    airline: string;
    from: string;
    to: string;
    price: number;
    duration: string;
    isDirect: boolean;
    seats: number;
}

export interface project  {
    projectId: number;
    title: string;
    client: string;
    budget: number;
    status: string;
    teamSize: number;
    isCritical: boolean;
    deadline: string;
}

export interface city  {
    cityId: number;
    name: string;
    state: string;
    population: number;
    isMetro: boolean;
    pincode: number;
    famousFor: string;
}

export interface mobile  {
    mobileId: number;
    brand: string;
    model: string;
    price: number;
    ram: number;
    storage: number;
    isAvailable: boolean;
    os: string;
}

export interface member  {
    memberId: number;
    name: string;
    age: number;
    membership: string;
    booksIssued: number;
    isActive: boolean;
    joinDate: string;
    email: string;
}

export interface gym {
    gymId: number;
    name: string;
    age: number;
    plan: string;
    fees: number;
    trainer: string;
    isActive: boolean;
    weight: number;
}

export interface car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel: string;
    isAvailable: boolean;
}

export interface college  {
    collegeId: number;
    name: string;
    city: string;
    type: string;
    established: number;
    fees: number;
    rating: number;
    isAutonomous: boolean;
}

export interface cricket {
    playerId: number;
    name: string;
    role: string;
    team: string;
    matches: number;
    runs: number;
    isActive: boolean;
    jerseyNo: number;
}

export interface subject {
    subjectId: number;
    name: string;
    code: string;
    credits: number;
    semester: number;
    isElective: boolean;
    faculty: string;
}

export interface laptop {
    laptopId: number;
    brand: string;
    model: string;
    price: number;
    ram: number;
    processor: string;
    isAvailable: boolean;
    warranty: number;
}

export interface appliance {
    appId: number;
    name: string;
    brand: string;
    price: number;
    warranty: number;
    energyRating: number;
    isAvailable: boolean;
    category: string;
}

export interface event  {
    eventId: number;
    title: string;
    city: string;
    date: string;
    ticketPrice: number;
    seats: number;
    isSoldOut: boolean;
    organizer: string;
}


export interface company {
    companyId: number;
    name: string;
    headquarters: string;
    employees: number;
    founded: number;
    revenueCr: number;
    isPublic: boolean;
    sector: string;
}


export interface grocery {
    itemId: number;
    name: string;
    category: string;
    price: number;
    unit: string;
    stock: number;
    isOrganic: boolean;
    brand: string;
}


export interface hospital {
    hospitalId: number;
    name: string;
    city: string;
    beds: number;
    type: string;
    rating: number;
    hasEmergency: boolean;
    established: number;
}

export interface song {
    songId: number;
    title: string;
    artist: string;
    album: string;
    duration: number;
    year: number;
    genre: string;
    isPopular: boolean;
}


export interface bike  {
    bikeId: number;
    brand: string;
    model: string;
    price: number;
    cc: number;
    mileage: number;
    isAvailable: boolean;
    color: string;
}

export interface place {
    placeId: number;
    name: string;
    city: string;
    state: string;
    entryFee: number;
    rating: number;
    bestSeason: string;
    isUnesco: boolean;
}

export interface transaction {
    txnId: string;
    accountHolder: string;
    type: string;
    amount: number;
    mode: string;
    status: string;
    date: string;
}

export interface task {
    taskId: number;
    title: string;
    assignedTo: string;
    priority: string;
    status: string;
    dueDate: string;
    isCompleted: boolean;
}


