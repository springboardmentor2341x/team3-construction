import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-manager-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-manager-dashboard.html',
  styleUrls: ['./project-manager-dashboard.css']
})
export class ProjectManagerDashboardComponent {

  dashboardCards = [
    {
      title: 'Active Projects',
      value: 12
    },
    {
      title: 'Completed Projects',
      value: 8
    },
    {
      title: 'Pending Tasks',
      value: 15
    },
    {
      title: 'Budget Utilization',
      value: '72%'
    }
  ];

  projects = [
    {
      name: 'Metro Rail Extension',
      client: 'ABC Builders',
      status: 'In Progress',
      progress: '72%'
    },
    {
      name: 'Commercial Complex',
      client: 'Skyline Infra',
      status: 'Planning',
      progress: '25%'
    },
    {
      name: 'Residential Tower',
      client: 'Green Homes',
      status: 'Completed',
      progress: '100%'
    },
    {
      name: 'Hospital Building',
      client: 'City Developers',
      status: 'In Progress',
      progress: '60%'
    }
  ];

  milestones = [
    {
      task: 'Foundation Work',
      deadline: '05 Aug 2026',
      status: 'Completed'
    },
    {
      task: 'Structural Framework',
      deadline: '18 Aug 2026',
      status: 'In Progress'
    },
    {
      task: 'Roof Installation',
      deadline: '02 Sep 2026',
      status: 'Pending'
    },
    {
      task: 'Interior Finishing',
      deadline: '15 Sep 2026',
      status: 'Pending'
    }
  ];

  siteProgress = [
    {
      site: 'Site A',
      engineer: 'Site Engineer 1',
      progress: '80%',
      status: 'On Schedule'
    },
    {
      site: 'Site B',
      engineer: 'Site Engineer 2',
      progress: '60%',
      status: 'In Progress'
    },
    {
      site: 'Site C',
      engineer: 'Site Engineer 3',
      progress: '45%',
      status: 'Delayed'
    }
  ];

  resources = [
    {
      name: 'Excavator',
      project: 'Metro Rail',
      status: 'Allocated'
    },
    {
      name: 'Tower Crane',
      project: 'Commercial Complex',
      status: 'Allocated'
    },
    {
      name: 'Concrete Mixer',
      project: 'Hospital',
      status: 'Available'
    }
  ];

  workforce = [
    {
      team: 'Civil Team',
      count: 42,
      supervisor: 'Supervisor A'
    },
    {
      team: 'Electrical Team',
      count: 18,
      supervisor: 'Supervisor B'
    },
    {
      team: 'Plumbing Team',
      count: 14,
      supervisor: 'Supervisor C'
    }
  ];

  equipments = [
    {
      name: 'Bulldozer',
      location: 'Site A',
      status: 'Working'
    },
    {
      name: 'Concrete Pump',
      location: 'Site B',
      status: 'Idle'
    },
    {
      name: 'Mobile Crane',
      location: 'Site C',
      status: 'Maintenance'
    }
  ];

  procurement = [
    {
      material: 'Cement',
      supplier: 'Ultra Cement',
      status: 'Approved'
    },
    {
      material: 'Steel',
      supplier: 'Steel India',
      status: 'Pending'
    },
    {
      material: 'Bricks',
      supplier: 'ABC Suppliers',
      status: 'Delivered'
    }
  ];

  budgets = [
    {
      project: 'Metro Rail',
      total: '$1,200,000',
      spent: '$850,000',
      remaining: '$350,000'
    },
    {
      project: 'Commercial Complex',
      total: '$950,000',
      spent: '$420,000',
      remaining: '$530,000'
    },
    {
      project: 'Hospital',
      total: '$780,000',
      spent: '$500,000',
      remaining: '$280,000'
    }
  ];

  notifications = [
    'Concrete supply approved.',
    'Weekly progress meeting scheduled.',
    'Equipment maintenance due tomorrow.',
    'Budget report generated successfully.',
    'New milestone assigned to Site A.'
  ];

}