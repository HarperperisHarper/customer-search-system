import { useState, useMemo } from 'react';
import { Search, Package, ExternalLink, X, ChevronDown, ChevronUp, Mail, Phone, Users, Filter, BarChart3, ArrowUpDown, Star } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  status: 'customer' | 'lead';
  email: string;
  phone: string;
  hubspotId: string;
  products: string[];
  totalPurchases: number;
  lastPurchase: string;
  customerSince: string | null;
  leadSince?: string;
  purchaseHistory: Array<{
    date: string;
    product: string;
    quantity: number;
    amount: number;
  }>;
  matchingProducts?: string[];
  matchCount?: number;
}

const ProductCustomerDashboard = () => {
  // Enhanced sample data with lead/customer status
  const [companies] = useState<Company[]>([
    {
      id: 1,
      name: 'Acme Corporation',
      status: 'customer',
      email: 'contact@acme.com',
      phone: '+1 (555) 123-4567',
      hubspotId: 'HS123456',
      products: ['Product A', 'Product B', 'Product D'],
      totalPurchases: 145000,
      lastPurchase: '2024-10-15',
      customerSince: '2022-03-10',
      purchaseHistory: [
        { date: '2024-10-15', product: 'Product A', quantity: 50, amount: 25000 },
        { date: '2024-09-20', product: 'Product B', quantity: 30, amount: 18000 },
        { date: '2024-08-10', product: 'Product D', quantity: 100, amount: 45000 },
        { date: '2024-07-05', product: 'Product A', quantity: 75, amount: 37500 },
        { date: '2024-06-15', product: 'Product B', quantity: 20, amount: 12000 },
      ]
    },
    {
      id: 2,
      name: 'TechStart Inc.',
      status: 'customer',
      email: 'procurement@techstart.com',
      phone: '+1 (555) 234-5678',
      hubspotId: 'HS234567',
      products: ['Product A', 'Product C'],
      totalPurchases: 89000,
      lastPurchase: '2024-11-02',
      customerSince: '2023-01-15',
      purchaseHistory: [
        { date: '2024-11-02', product: 'Product A', quantity: 40, amount: 20000 },
        { date: '2024-09-15', product: 'Product C', quantity: 60, amount: 42000 },
        { date: '2024-07-20', product: 'Product A', quantity: 35, amount: 17500 },
        { date: '2024-05-10', product: 'Product C', quantity: 15, amount: 9500 },
      ]
    },
    {
      id: 3,
      name: 'Global Solutions Ltd.',
      status: 'customer',
      email: 'info@globalsolutions.com',
      phone: '+1 (555) 345-6789',
      hubspotId: 'HS345678',
      products: ['Product B', 'Product C', 'Product D', 'Product E'],
      totalPurchases: 210000,
      lastPurchase: '2024-10-28',
      customerSince: '2021-11-20',
      purchaseHistory: [
        { date: '2024-10-28', product: 'Product B', quantity: 80, amount: 48000 },
        { date: '2024-10-01', product: 'Product E', quantity: 25, amount: 35000 },
        { date: '2024-09-10', product: 'Product C', quantity: 45, amount: 31500 },
        { date: '2024-08-15', product: 'Product D', quantity: 90, amount: 40500 },
        { date: '2024-07-22', product: 'Product B', quantity: 55, amount: 33000 },
        { date: '2024-06-05', product: 'Product E', quantity: 15, amount: 22000 },
      ]
    },
    {
      id: 4,
      name: 'Innovation Works',
      status: 'lead',
      email: 'buying@innovationworks.com',
      phone: '+1 (555) 456-7890',
      hubspotId: 'HS456789',
      products: ['Product A'],
      totalPurchases: 55000,
      lastPurchase: '2024-11-05',
      customerSince: null,
      leadSince: '2024-08-01',
      purchaseHistory: [
        { date: '2024-11-05', product: 'Product A', quantity: 60, amount: 30000 },
        { date: '2024-09-12', product: 'Product A', quantity: 50, amount: 25000 },
      ]
    },
    {
      id: 5,
      name: 'Enterprise Co.',
      status: 'customer',
      email: 'orders@enterprise.com',
      phone: '+1 (555) 567-8901',
      hubspotId: 'HS567890',
      products: ['Product B', 'Product C', 'Product E'],
      totalPurchases: 175000,
      lastPurchase: '2024-10-20',
      customerSince: '2022-06-30',
      purchaseHistory: [
        { date: '2024-10-20', product: 'Product E', quantity: 40, amount: 56000 },
        { date: '2024-09-05', product: 'Product B', quantity: 70, amount: 42000 },
        { date: '2024-08-18', product: 'Product C', quantity: 50, amount: 35000 },
        { date: '2024-07-10', product: 'Product E', quantity: 30, amount: 42000 },
      ]
    },
    {
      id: 6,
      name: 'NextGen Manufacturing',
      status: 'lead',
      email: 'contact@nextgenmfg.com',
      phone: '+1 (555) 678-9012',
      hubspotId: 'HS678901',
      products: ['Product C', 'Product D'],
      totalPurchases: 35000,
      lastPurchase: '2024-11-08',
      customerSince: null,
      leadSince: '2024-09-15',
      purchaseHistory: [
        { date: '2024-11-08', product: 'Product C', quantity: 25, amount: 17500 },
        { date: '2024-10-05', product: 'Product D', quantity: 40, amount: 17500 },
      ]
    },
    {
      id: 7,
      name: 'Pacific Trading Co.',
      status: 'customer',
      email: 'orders@pacifictrading.com',
      phone: '+1 (555) 789-0123',
      hubspotId: 'HS789012',
      products: ['Product A', 'Product B', 'Product E'],
      totalPurchases: 125000,
      lastPurchase: '2024-11-01',
      customerSince: '2023-05-20',
      purchaseHistory: [
        { date: '2024-11-01', product: 'Product A', quantity: 45, amount: 22500 },
        { date: '2024-09-28', product: 'Product B', quantity: 60, amount: 36000 },
        { date: '2024-08-20', product: 'Product E', quantity: 35, amount: 49000 },
        { date: '2024-07-15', product: 'Product A', quantity: 35, amount: 17500 },
      ]
    }
  ]);

  const allProducts = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
  
  const [viewMode, setViewMode] = useState<'companies' | 'products'>('companies');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedHistory, setExpandedHistory] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'customer' | 'lead'>('all');
  const [sortBy, setSortBy] = useState<'revenue' | 'quantity' | 'customers'>('revenue');

  // Calculate product analytics
  const productAnalytics = useMemo(() => {
    const analytics: Record<string, {
      name: string;
      totalRevenue: number;
      totalQuantity: number;
      customers: Set<string>;
      leads: Set<string>;
      transactions: Array<{
        company: string;
        companyId: number;
        status: string;
        date: string;
        quantity: number;
        amount: number;
      }>;
    }> = {};
    
    companies.forEach(company => {
      company.purchaseHistory.forEach(purchase => {
        if (!analytics[purchase.product]) {
          analytics[purchase.product] = {
            name: purchase.product,
            totalRevenue: 0,
            totalQuantity: 0,
            customers: new Set(),
            leads: new Set(),
            transactions: []
          };
        }
        
        analytics[purchase.product].totalRevenue += purchase.amount;
        analytics[purchase.product].totalQuantity += purchase.quantity;
        
        if (company.status === 'customer') {
          analytics[purchase.product].customers.add(company.name);
        } else {
          analytics[purchase.product].leads.add(company.name);
        }
        
        analytics[purchase.product].transactions.push({
          company: company.name,
          companyId: company.id,
          status: company.status,
          date: purchase.date,
          quantity: purchase.quantity,
          amount: purchase.amount
        });
      });
    });
    
    // Convert to array and sort
    return Object.values(analytics).map(product => ({
      ...product,
      customerCount: product.customers.size,
      leadCount: product.leads.size,
      totalCompanies: product.customers.size + product.leads.size,
      avgOrderValue: product.totalRevenue / product.transactions.length
    })).sort((a, b) => {
      if (sortBy === 'revenue') return b.totalRevenue - a.totalRevenue;
      if (sortBy === 'quantity') return b.totalQuantity - a.totalQuantity;
      if (sortBy === 'customers') return b.totalCompanies - a.totalCompanies;
      return 0;
    });
  }, [companies, sortBy]);

  // Filter companies based on selected products and status
  const filteredCompanies = useMemo(() => {
    let filtered: Company[] = companies;
    
    if (selectedProducts.length > 0) {
      filtered = companies
        .map(company => ({
          ...company,
          matchingProducts: company.products.filter(p => selectedProducts.includes(p)),
          matchCount: company.products.filter(p => selectedProducts.includes(p)).length
        }))
        .filter(company => company.matchCount! > 0)
        .sort((a, b) => b.matchCount! - a.matchCount!);
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(company => company.status === statusFilter);
    }
    
    return filtered;
  }, [selectedProducts, companies, statusFilter]);

  const toggleProduct = (product: string) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const removeProduct = (product: string) => {
    setSelectedProducts(prev => prev.filter(p => p !== product));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Customer Detail View
  if (selectedCompany) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Customer Detail Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {selectedCompany.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-gray-900">{selectedCompany.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedCompany.status === 'customer' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedCompany.status === 'customer' ? '✓ Customer' : '○ Lead'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-gray-600">
                    <span className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {selectedCompany.email}
                    </span>
                    <span className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      {selectedCompany.phone}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {selectedCompany.status === 'customer' 
                      ? `Customer since ${formatDate(selectedCompany.customerSince!)}`
                      : `Lead since ${formatDate(selectedCompany.leadSince!)}`
                    }
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href={`https://app.hubspot.com/contacts/${selectedCompany.hubspotId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center space-x-2 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in HubSpot</span>
                </a>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>

            {/* Customer Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                <div className="text-blue-600 text-sm font-medium">Total Purchases</div>
                <div className="text-2xl font-bold text-blue-900 mt-1">
                  {formatCurrency(selectedCompany.totalPurchases)}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <div className="text-green-600 text-sm font-medium">Last Purchase</div>
                <div className="text-2xl font-bold text-green-900 mt-1">
                  {formatDate(selectedCompany.lastPurchase)}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="text-purple-600 text-sm font-medium">Products Used</div>
                <div className="text-2xl font-bold text-purple-900 mt-1">
                  {selectedCompany.products.length}
                </div>
              </div>
            </div>

            {/* Products Tags */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Active Products</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCompany.products.map(product => (
                  <span
                    key={product}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase History */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Purchase History</h2>
              <button
                onClick={() => setExpandedHistory(!expandedHistory)}
                className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                <span>{expandedHistory ? 'Show Less' : 'Show All'}</span>
                {expandedHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Product</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">Quantity</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {(expandedHistory ? selectedCompany.purchaseHistory : selectedCompany.purchaseHistory.slice(0, 3))
                    .map((purchase, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">{formatDate(purchase.date)}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                          {purchase.product}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-gray-600">{purchase.quantity}</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">
                        {formatCurrency(purchase.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Product & Customer Analytics</h1>
          <p className="text-gray-600">Analyze product performance and customer relationships</p>
        </div>

        {/* View Mode Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('companies')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'companies' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Company View
              </button>
              <button
                onClick={() => setViewMode('products')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'products' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Package className="w-4 h-4 inline mr-2" />
                Product View
              </button>
            </div>
            
            {viewMode === 'companies' && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as 'all' | 'customer' | 'lead')}
                    className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Companies</option>
                    <option value="customer">Customers Only</option>
                    <option value="lead">Leads Only</option>
                  </select>
                </div>
              </div>
            )}
            
            {viewMode === 'products' && (
              <div className="flex items-center space-x-2">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'revenue' | 'quantity' | 'customers')}
                  className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="revenue">Sort by Revenue</option>
                  <option value="quantity">Sort by Quantity</option>
                  <option value="customers">Sort by Customers</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Search Section (for Company View) */}
        {viewMode === 'companies' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="relative">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    {selectedProducts.map(product => (
                      <span
                        key={product}
                        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-full"
                      >
                        {product}
                        <button
                          onClick={() => removeProduct(product)}
                          className="ml-2 hover:bg-white hover:bg-opacity-20 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      placeholder={selectedProducts.length === 0 ? "Search by products to find companies..." : "Add more products..."}
                      className="flex-1 min-w-[200px] outline-none text-gray-700"
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="p-2">
                    {allProducts
                      .filter(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map(product => (
                      <button
                        key={product}
                        onClick={() => {
                          toggleProduct(product);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-between ${
                          selectedProducts.includes(product) ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                      >
                        <span>{product}</span>
                        {selectedProducts.includes(product) && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">Selected</span>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 p-2">
                    <button
                      onClick={() => setShowDropdown(false)}
                      className="w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {selectedProducts.length > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Found {filteredCompanies.length} {statusFilter === 'all' ? 'companies' : statusFilter + 's'} using selected products
                </span>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                    {filteredCompanies.filter(c => c.status === 'customer').length} Customers
                  </span>
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
                    {filteredCompanies.filter(c => c.status === 'lead').length} Leads
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Company View Results */}
        {viewMode === 'companies' && (
          <div className="grid gap-4">
            {filteredCompanies.map(company => (
              <div
                key={company.id}
                onClick={() => setSelectedCompany(company)}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      company.status === 'customer' 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-yellow-500 to-orange-500'
                    }`}>
                      {company.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {company.name}
                        </h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          company.status === 'customer' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {company.status === 'customer' ? 'Customer' : 'Lead'}
                        </span>
                        {company.matchCount && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                            {company.matchCount} match{company.matchCount > 1 ? 'es' : ''}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {company.email}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {company.products.map(product => (
                          <span
                            key={product}
                            className={`px-2 py-1 text-xs rounded-full ${
                              selectedProducts.includes(product)
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(company.totalPurchases)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Last: {formatDate(company.lastPurchase)}
                    </div>
                    {company.status === 'customer' && (
                      <div className="text-xs text-gray-400 mt-1">
                        Since {formatDate(company.customerSince!)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product View Results */}
        {viewMode === 'products' && (
          <div className="space-y-6">
            {/* Product Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {productAnalytics.map((product, index) => (
                <div key={product.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                        index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                        index === 2 ? 'bg-gradient-to-br from-orange-600 to-orange-800' :
                        'bg-gradient-to-br from-blue-500 to-indigo-600'
                      }`}>
                        {index < 3 && <Star className="w-5 h-5" />}
                        {index >= 3 && <Package className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-green-600 font-medium">
                            {product.customerCount} customer{product.customerCount !== 1 ? 's' : ''}
                          </span>
                          {product.leadCount > 0 && (
                            <span className="text-xs text-yellow-600 font-medium">
                              {product.leadCount} lead{product.leadCount !== 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-bold">
                        TOP SELLER
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                      <div className="text-blue-600 text-xs font-medium">Total Revenue</div>
                      <div className="text-xl font-bold text-blue-900 mt-1">
                        {formatCurrency(product.totalRevenue)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                      <div className="text-green-600 text-xs font-medium">Units Sold</div>
                      <div className="text-xl font-bold text-green-900 mt-1">
                        {product.totalQuantity}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Top Buyers</span>
                      <span className="text-xs text-gray-500">Avg: {formatCurrency(product.avgOrderValue)}/order</span>
                    </div>
                    <div className="space-y-2">
                      {product.transactions
                        .sort((a, b) => b.amount - a.amount)
                        .slice(0, 3)
                        .map((transaction, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className={`w-2 h-2 rounded-full ${
                                transaction.status === 'customer' ? 'bg-green-500' : 'bg-yellow-500'
                              }`}></span>
                              <span 
                                className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCompany(companies.find(c => c.id === transaction.companyId) || null);
                                }}
                              >
                                {transaction.company}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              {formatCurrency(transaction.amount)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Performance Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Detailed Product Performance
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Product</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Revenue</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Units</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-700">Customers</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-700">Leads</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-700">Avg Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productAnalytics.map((product, index) => (
                      <tr key={product.name} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            {index === 0 && <Star className="w-4 h-4 text-yellow-500" />}
                            <span className="font-medium text-gray-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-gray-900">
                          {formatCurrency(product.totalRevenue)}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-600">
                          {product.totalQuantity}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {product.customerCount}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            {product.leadCount}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-gray-600">
                          {formatCurrency(product.avgOrderValue)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {filteredCompanies.length === 0 && selectedProducts.length > 0 && viewMode === 'companies' && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No {statusFilter === 'all' ? 'companies' : statusFilter + 's'} found using the selected products</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCustomerDashboard;

