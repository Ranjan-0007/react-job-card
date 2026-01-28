import React from 'react'
import {Bookmark} from 'lucide-react'
import Components from './components.jsx'

function App() {
  const jobs = [
     {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
    companyName: "Intel",
    datePosted: "5 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/019/136/433/non_2x/amd-logo-amd-icon-free-free-vector.jpg",
    companyName: "AMD",
    datePosted: "2 weeks ago",
    post: "Firmware Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Austin, USA"
  },
  ];
  return (
    <div className='parent' >
      {jobs.map(function(item,idx){
        return <div key={idx}>
          <Components company={item.companyName} post={item.datePosted} role={item.post} tag={item.tag1}
        tags={item.tag2} pay={item.pay} location={item.location} logo={item.brandLogo} />
        </div>
      })}
    </div>
  )
}

export default App