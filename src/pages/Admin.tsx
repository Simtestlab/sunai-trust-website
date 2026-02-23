import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    getVolunteerSubmissions,
    getNGOSubmissions,
    type VolunteerSubmission,
    type NGOSubmission,
} from "@/lib/formService";
import { useAuth, signOutUser } from "@/lib/auth";
import {
    Users,
    Building2,
    Mail,
    RefreshCw,
    Search,
    FileSpreadsheet,
    ChevronLeft,
    ChevronRight,
    Eye,
    X,
    Loader2,
    LayoutDashboard,
    Clock,
    CheckCircle2,
    AlertCircle,
    LogOut,
} from "lucide-react";

/* ─── Column definitions for each data type ────────────────────────── */

const VOLUNTEER_COLUMNS: Record<string, string> = {
    id: "ID",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone",
    whatsappNumber: "WhatsApp",
    dob: "Date of Birth",
    bloodGroup: "Blood Group",
    maritalStatus: "Marital Status",
    languages: "Languages",
    address: "Address",
    location: "Location",
    city: "City",
    state: "State",
    country: "Country",
    pincode: "Pincode",
    aadharNumber: "Aadhar / ID",
    educationType: "Education",
    specialization: "Specialization",
    skill: "Key Skill",
    certification: "Certification",
    organization: "Organization",
    title: "Job Title",
    yearsOfExperience: "Years Exp.",
    hasVolunteerExperience: "Vol. Experience",
    volunteerYearsOfExperience: "Vol. Years",
    areaOfInterest: "Area of Interest",
    emergencyName: "Emergency Contact",
    emergencyNumber: "Emergency Phone",
    photoUrl: "Photo URL",
    aadharCopyUrl: "Aadhar Copy URL",
    resumeUrl: "Resume URL",
    status: "Status",
    createdAt: "Submitted At",
};

const NGO_COLUMNS: Record<string, string> = {
    id: "ID",
    organizationName: "Organization",
    registrationNumber: "Reg. Number",
    registrationDate: "Reg. Date",
    yearOfEstablishment: "Est. Year",
    panTaxId: "PAN",
    tax12aUrn: "12A URN",
    tax80gUrn: "80G URN",
    csrRegNumber: "CSR Reg. No.",
    registeredAddress: "Address",
    state: "State",
    city: "City",
    contactNumber: "Contact",
    officialEmail: "Email",
    contactPersonNumber: "Person Phone",
    whatsappNumber: "WhatsApp",
    contactPersonEmail: "Person Email",
    website: "Website",
    socialMediaLink: "Social Media",
    missionVision: "Mission / Vision",
    areasOfOperation: "Areas of Op.",
    activeVolunteers: "Active Volunteers",
    bankAccountNo: "Bank Account",
    bankIFSC: "IFSC",
    bankName: "Bank Name",
    documentsUrl: "Documents URL",
    status: "Status",
    createdAt: "Submitted At",
};



/* ─── Tab type ─────────────────────────────────────────────────────── */
type TabKey = "volunteers" | "ngo";

/* ─── Status badge colours ─────────────────────────────────────────── */
const statusColor: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    reviewed: "bg-blue-100 text-blue-700 border-blue-200",
    approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
    rejected: "bg-red-100 text-red-700 border-red-200",
    unread: "bg-amber-100 text-amber-700 border-amber-200",
    read: "bg-blue-100 text-blue-700 border-blue-200",
    replied: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

/* ─── Component ────────────────────────────────────────────────────── */
const ROWS_PER_PAGE = 10;

const Admin = () => {
    const { user, loading: authLoading } = useAuth();
    const [activeTab, setActiveTab] = useState<TabKey>("volunteers");
    const [volunteers, setVolunteers] = useState<VolunteerSubmission[]>([]);
    const [ngoList, setNgoList] = useState<NGOSubmission[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [detailItem, setDetailItem] = useState<Record<string, unknown> | null>(null);

    /* ── Fetch data ─────────────────────────────────────── */
    const fetchData = async () => {
        setLoading(true);
        setError("");
        try {
            const [v, n] = await Promise.all([
                getVolunteerSubmissions(),
                getNGOSubmissions(),
            ]);
            setVolunteers(v);
            setNgoList(n);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(
                "Failed to load data. Ensure Firebase is configured and Firestore collections exist."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) fetchData();
    }, [user]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchQuery]);

    /* ── Auth gate (must be AFTER all hooks) ──────────── */
    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-400" />
            </div>
        );
    }
    if (!user) {
        return <AdminLogin />;
    }


    /* ── Derived data ───────────────────────────────────── */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentData = (): Record<string, any>[] => {
        switch (activeTab) {
            case "volunteers":
                return volunteers as unknown as Record<string, any>[];
            case "ngo":
                return ngoList as unknown as Record<string, any>[];
        }
    };

    const columns = (): Record<string, string> => {
        switch (activeTab) {
            case "volunteers":
                return VOLUNTEER_COLUMNS;
            case "ngo":
                return NGO_COLUMNS;
        }
    };

    const tableKeys = (): string[] => {
        switch (activeTab) {
            case "volunteers":
                return ["firstName", "lastName", "email", "phoneNumber", "city", "status"];
            case "ngo":
                return ["organizationName", "officialEmail", "contactNumber", "city", "status"];
        }
    };

    /* ── Search filtering ───────────────────────────────── */
    const filtered = currentData().filter((row) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return Object.values(row).some(
            (val) => val != null && String(val).toLowerCase().includes(q)
        );
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
    const paginatedRows = filtered.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );


    /* ── Format Firestore timestamp ─────────────────────── */
    const formatTimestamp = (val: unknown): string => {
        if (!val) return "—";
        if (typeof val === "object" && val !== null && "toDate" in val) {
            return (val as { toDate: () => Date }).toDate().toLocaleString();
        }
        return String(val);
    };

    /* ── Tabs ────────────────────────────────────────────── */
    const tabs: { key: TabKey; label: string; icon: React.ElementType; count: number }[] = [
        { key: "volunteers", label: "Volunteers", icon: Users, count: volunteers.length },
        { key: "ngo", label: "NGO / Partners", icon: Building2, count: ngoList.length },
    ];

    /* ── Render ─────────────────────────────────────────── */
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white py-10 md:py-14">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <LayoutDashboard className="w-7 h-7 text-emerald-300" />
                                <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => signOutUser()}
                                className="rounded-xl gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </Button>
                        </div>
                        <p className="text-emerald-200 text-sm md:text-base max-w-xl">
                            View and export form submissions from the SUNAI website.
                        </p>

                        {/* Summary cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {[
                                {
                                    label: "Volunteer Registrations",
                                    count: volunteers.length,
                                    icon: Users,
                                    accent: "bg-emerald-500/20 text-emerald-200",
                                },
                                {
                                    label: "NGO / Partner Registrations",
                                    count: ngoList.length,
                                    icon: Building2,
                                    accent: "bg-green-500/20 text-green-200",
                                },

                            ].map((card) => (
                                <div
                                    key={card.label}
                                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center gap-4"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.accent}`}>
                                        <card.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{card.count}</p>
                                        <p className="text-sm text-white/70">{card.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content area */}
                <div className="container mx-auto px-4 max-w-7xl py-8">
                    {/* Tab bar + actions */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        {/* Tabs */}
                        <div className="flex gap-1 bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.key
                                        ? "bg-emerald-600 text-white shadow-sm"
                                        : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{tab.label}</span>
                                    <span
                                        className={`text-xs font-bold rounded-full px-2 py-0.5 ${activeTab === tab.key
                                            ? "bg-white/20 text-white"
                                            : "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        {tab.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder="Search…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9 w-52 rounded-xl"
                                />
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={fetchData}
                                className="rounded-xl gap-2"
                                disabled={loading}
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                Refresh
                            </Button>
                        </div>
                    </div>

                    {/* Error state */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mb-6">
                            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-red-700 text-sm">Error loading data</p>
                                <p className="text-red-600 text-sm mt-0.5">{error}</p>
                            </div>
                        </div>
                    )}

                    {/* Loading state */}
                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
                            <span className="ml-3 text-gray-500 font-medium">Loading submissions…</span>
                        </div>
                    )}

                    {/* Data table */}
                    {!loading && (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                                #
                                            </th>
                                            {tableKeys().map((key) => (
                                                <th
                                                    key={key}
                                                    className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 tracking-wider"
                                                >
                                                    {columns()[key] || key}
                                                </th>
                                            ))}
                                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                                Submitted
                                            </th>
                                            <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {paginatedRows.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={tableKeys().length + 3}
                                                    className="px-4 py-16 text-center"
                                                >
                                                    <FileSpreadsheet className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                                                    <p className="text-gray-400 font-medium">No submissions found</p>
                                                    <p className="text-gray-300 text-xs mt-1">
                                                        {searchQuery
                                                            ? "Try a different search term"
                                                            : "Submissions will appear here once users submit forms"}
                                                    </p>
                                                </td>
                                            </tr>
                                        ) : (
                                            paginatedRows.map((row, idx) => (
                                                <tr
                                                    key={(row as { id?: string }).id || idx}
                                                    className="hover:bg-gray-50/50 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-gray-400 font-medium">
                                                        {(currentPage - 1) * ROWS_PER_PAGE + idx + 1}
                                                    </td>
                                                    {tableKeys().map((key) => (
                                                        <td key={key} className="px-4 py-3 text-gray-700 max-w-[200px] truncate">
                                                            {key === "status" ? (
                                                                <span
                                                                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColor[String(row[key])] || "bg-gray-100 text-gray-600"
                                                                        }`}
                                                                >
                                                                    {String(row[key]) === "approved" || String(row[key]) === "replied" ? (
                                                                        <CheckCircle2 className="w-3 h-3" />
                                                                    ) : (
                                                                        <Clock className="w-3 h-3" />
                                                                    )}
                                                                    {String(row[key])}
                                                                </span>
                                                            ) : (
                                                                String(row[key] ?? "—")
                                                            )}
                                                        </td>
                                                    ))}
                                                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                                                        {formatTimestamp((row as Record<string, unknown>).createdAt)}
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => setDetailItem(row as Record<string, unknown>)}
                                                            className="rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
                                    <p className="text-xs text-gray-500">
                                        Showing {(currentPage - 1) * ROWS_PER_PAGE + 1}–
                                        {Math.min(currentPage * ROWS_PER_PAGE, filtered.length)} of{" "}
                                        {filtered.length} results
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="rounded-lg h-8 w-8 p-0"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </Button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                                            .filter(
                                                (p) =>
                                                    p === 1 ||
                                                    p === totalPages ||
                                                    Math.abs(p - currentPage) <= 1
                                            )
                                            .map((p, i, arr) => (
                                                <React.Fragment key={p}>
                                                    {i > 0 && arr[i - 1] !== p - 1 && (
                                                        <span className="text-gray-300 px-1">…</span>
                                                    )}
                                                    <Button
                                                        variant={p === currentPage ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => setCurrentPage(p)}
                                                        className={`rounded-lg h-8 w-8 p-0 text-xs ${p === currentPage
                                                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                                            : ""
                                                            }`}
                                                    >
                                                        {p}
                                                    </Button>
                                                </React.Fragment>
                                            ))}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                            disabled={currentPage === totalPages}
                                            className="rounded-lg h-8 w-8 p-0"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
            <Footer />

            {/* ── Detail modal ──────────────────────────────────── */}
            {detailItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setDetailItem(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h3 className="font-bold text-gray-800 text-lg">Submission Details</h3>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDetailItem(null)}
                                className="rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        {/* Body */}
                        <div className="overflow-y-auto p-6">
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                {Object.entries(columns()).map(([key, label]) => {
                                    const value = detailItem[key];
                                    if (value === undefined || value === null || value === "") return null;
                                    const isUrl = typeof value === "string" && value.startsWith("http");
                                    return (
                                        <div key={key} className={key === "message" || key === "missionVision" || key === "areaOfInterest" || key === "address" ? "sm:col-span-2" : ""}>
                                            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                                {label}
                                            </dt>
                                            <dd className="text-sm text-gray-800">
                                                {key === "status" ? (
                                                    <span
                                                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColor[String(value)] || "bg-gray-100 text-gray-600"
                                                            }`}
                                                    >
                                                        {String(value)}
                                                    </span>
                                                ) : isUrl ? (
                                                    <a
                                                        href={String(value)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-emerald-600 hover:underline break-all"
                                                    >
                                                        View File →
                                                    </a>
                                                ) : key === "createdAt" ? (
                                                    formatTimestamp(value)
                                                ) : (
                                                    String(value)
                                                )}
                                            </dd>
                                        </div>
                                    );
                                })}
                            </dl>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
