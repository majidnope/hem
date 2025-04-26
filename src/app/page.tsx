import React from "react";
import { Search, File, Box, Plus, MoreVertical, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white p-8"
      style={{
        background: "linear-gradient(135deg, #001a33 0%, #002147 50%, #003366 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with subtle glow */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
          >
            AI-Powered Healthcare Guidelines
          </h1>

          {/* Search Bar with glossy effect */}
          <div className="relative mb-6 max-w-2xl mx-auto">
            <div
              className="relative"
              style={{ boxShadow: "0 0 25px rgba(0, 38, 77, 0.5)" }}
            >
              <Input
                variant="glossy"
                size="pill"
                placeholder="Search by topic, infrastructure type, or ask a question..."
                className="pl-12 pr-4"
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-300" />
              </div>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="text-sm text-gray-300 mb-8">
            <p>Example prompts: &quot;Show me ICU fire safety standards&quot;,</p>
            <p>&quot;Build 10-bed dialysis unit guidelines&quot;</p>
          </div>
        </div>

        {/* Action Cards with glossy effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card variant="glossy" hover="lift" className="flex items-center p-6">
            <div className="bg-blue-100/80 p-3 rounded-lg mr-3 shadow-inner">
              <File className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="font-bold text-[#001a33]">Setup a New Facility</h2>
              <p className="text-sm text-[#003366]">View Document Categories</p>
            </div>
          </Card>

          <Card variant="glossy" hover="lift" className="flex items-center p-6">
            <div className="bg-blue-100/80 p-3 rounded-lg mr-3 shadow-inner">
              <Box className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="font-bold text-[#001a33]">View Document Categories</h2>
              <p className="text-sm text-[#003366]">Categories</p>
            </div>
          </Card>

          <Card variant="glossy" hover="lift" className="flex items-center p-6">
            <div className="bg-blue-100/80 p-3 rounded-lg mr-3 shadow-inner">
              <Plus className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="font-bold text-[#001a33]">Recent Updates</h2>
              <p className="text-sm text-[#003366]">Insights from AI</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Card variant="glossy" className="w-full md:w-1/4 h-max">
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-[#001a33]">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="facility" className="mr-2" />
                    <Label htmlFor="facility" className="text-[#003366]">Facility</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="infrastructure" className="mr-2" />
                    <Label htmlFor="infrastructure" className="text-[#003366]">Infrastructure</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="clinical-safety" className="mr-2" />
                    <Label htmlFor="clinical-safety" className="text-[#003366]">Clinical Safety</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="equipment" className="mr-2" />
                    <Label htmlFor="equipment" className="text-[#003366]">Equipment</Label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3 text-[#001a33]">Compliance Standard</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="nabh" className="mr-2" />
                    <Label htmlFor="nabh" className="text-[#003366]">NABH</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="jci" className="mr-2" />
                    <Label htmlFor="jci" className="text-[#003366]">JCI</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="who" className="mr-2" />
                    <Label htmlFor="who" className="text-[#003366]">WHO</Label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3 text-[#001a33]">Facility Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="icu" className="mr-2" />
                    <Label htmlFor="icu" className="text-[#003366]">ICU</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="ot" className="mr-2" />
                    <Label htmlFor="ot" className="text-[#003366]">OT</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="opd" className="mr-2" />
                    <Label htmlFor="opd" className="text-[#003366]">OPD</Label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3 text-[#001a33]">Document Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="checklist" className="mr-2" />
                    <Label htmlFor="checklist" className="text-[#003366]">Checklist</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="sop" className="mr-2" />
                    <Label htmlFor="sop" className="text-[#003366]">SOP</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="full-guidelines" className="mr-2" />
                    <Label htmlFor="full-guidelines" className="text-[#003366]">Full Guidelines</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3 text-[#001a33]">AI Suggestions</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="fire-safety" className="mr-2" />
                    <Label htmlFor="fire-safety" className="text-[#003366]">Fire Safety in operation theaters</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search results</h2>
              <div className="flex items-center text-blue-300 bg-blue-900/20 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20">
                <span>AI suggestions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Result Cards */}
            <div className="space-y-4">
              {/* Fire Safety Card */}
              <Card variant="glassDark" className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Fire Safety in Intensive Care Units</CardTitle>
                    <MoreVertical className="h-6 w-6 text-gray-300" />
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <span>Generated by AI</span>
                    <CheckCircle className="w-4 h-4 text-blue-300 ml-1" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-200">AI generated protocols for fire safety equipment requirements, and evacuation plans, evacuation signs.</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="glossy">View</Button>
                  <Button variant="outline">Summarize</Button>
                  <Button variant="outline">Compare</Button>
                  <Button variant="outline">Related</Button>
                  <Button variant="outline">Related Docs</Button>
                </CardFooter>
              </Card>

              {/* NABH Standards Card */}
              <Card variant="glassDark" className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>NABH Standards for Hospital Infrastructure</CardTitle>
                    <MoreVertical className="h-6 w-6 text-gray-300" />
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <span>Generated by AI</span>
                    <CheckCircle className="w-4 h-4 text-blue-300 ml-1" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-200">A general, structural and operational specifications for healthcare facilities.</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="glossy">View</Button>
                  <Button variant="outline">Summarize</Button>
                  <Button variant="outline">Compare</Button>
                  <Button variant="outline">Related</Button>
                  <Button variant="outline">Related Docs</Button>
                </CardFooter>
              </Card>

              {/* Dialysis Unit Card */}
              <Card variant="glassDark" className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Guidelines for Dialysis Unit Design</CardTitle>
                    <MoreVertical className="h-6 w-6 text-gray-300" />
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <span>Generated by AI</span>
                    <CheckCircle className="w-4 h-4 text-blue-300 ml-1" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-200">Covers layout, air ventilation, and infection control measures in hospital design.</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="glossy">View</Button>
                  <Button variant="outline">Summarize</Button>
                  <Button variant="outline">Compare</Button>
                  <Button variant="outline">Related</Button>
                  <Button variant="outline">Related Docs</Button>
                </CardFooter>
              </Card>

              {/* PPE Card */}
              <Card variant="glassDark" className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Personal Protective Equipment (PPE) Protocols</CardTitle>
                    <MoreVertical className="h-6 w-6 text-gray-300" />
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <span>Clinical Safety</span>
                    <span className="mx-2">•</span>
                    <span>SOP</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-200">Detailed PPE selection and usage guidelines in healthcare settings</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="glossy">View</Button>
                  <Button variant="outline">Summarize</Button>
                  <Button variant="outline">Compare</Button>
                  <Button variant="outline">Related?</Button>
                  <Button variant="outline">DOCS</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
